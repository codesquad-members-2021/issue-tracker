package team02.issue_tracker.oauth.service;

import io.netty.channel.ChannelOption;
import io.netty.handler.timeout.ReadTimeoutHandler;
import io.netty.handler.timeout.WriteTimeoutHandler;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import reactor.netty.http.client.HttpClient;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.*;
import team02.issue_tracker.oauth.exception.InvalidGithubUserRequestException;
import team02.issue_tracker.oauth.utils.GithubApiProperties;
import team02.issue_tracker.oauth.utils.JwtUtils;
import team02.issue_tracker.service.UserService;

import java.time.Duration;

@Slf4j
@Service
public class OAuthService {

    private final UserService userService;
    private final JwtUtils jwtUtils;
    private final GithubApiProperties githubApiProperties;
    private final WebClient webClient;

    public OAuthService(UserService userService, JwtUtils jwtUtils
            , GithubApiProperties githubApiProperties, WebClient webClient) {
        this.userService = userService;
        this.jwtUtils = jwtUtils;
        this.githubApiProperties = githubApiProperties;
        this.webClient = webClient;
    }

    public AuthJwt issueJwtForWeb(String code) {
        GithubUserProfile githubUserProfile = githubUserProfileFrom(
                githubApiProperties.accessTokenRequestForWeb(code));
        return jwtUtils.getJwt(userFrom(githubUserProfile));
    }

    public AuthJwt issueJwtForIos(String code) {
        GithubUserProfile githubUserProfile = githubUserProfileFrom(
                githubApiProperties.accessTokenRequestForIos(code));
        return jwtUtils.getJwt(userFrom(githubUserProfile));
    }

    private User userFrom(SocialProfile socialProfile) {
        User socialProfileUser = socialProfile.becomeUser();
        User user = userService.findByUser(socialProfileUser);
        if (user == null) {
            user = userService.enroll(socialProfileUser);
        }
        return user;
    }

    private GithubUserProfile githubUserProfileFrom(
            GithubAccessTokenRequestDto accessTokenRequest) {
        return githubUserProfileFrom(accessTokenFrom(accessTokenRequest));
    }

    private GithubAccessTokenResponseDto accessTokenFrom(
            GithubAccessTokenRequestDto accessTokenRequest) {
        GithubAccessTokenResponseDto accessTokenResponse = webClient.post()
                .uri(githubApiProperties.accessTokenUri())
                .accept(MediaType.APPLICATION_JSON)
                .bodyValue(accessTokenRequest)
                .retrieve()
                .bodyToMono(GithubAccessTokenResponseDto.class)
                .blockOptional()
                .orElseThrow(IllegalArgumentException::new);
        log.info("access token from GitHub : {}", accessTokenResponse.toString());
        return accessTokenResponse;
    }

    private GithubUserProfile githubUserProfileFrom(
            GithubAccessTokenResponseDto accessTokenResponse) {
        GithubUserProfile githubUserProfile = webClient.get()
                .uri(githubApiProperties.userInfoUri())
                .header(HttpHeaders.AUTHORIZATION
                        , "token " + accessTokenResponse.accessToken())
                .retrieve()
                .bodyToMono(GithubUserProfile.class)
                .blockOptional()
                .orElseThrow(InvalidGithubUserRequestException::new);
        log.info("github user profile : {}", githubUserProfile.toString());
        return githubUserProfile;
    }
}

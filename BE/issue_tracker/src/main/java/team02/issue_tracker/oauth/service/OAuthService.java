package team02.issue_tracker.oauth.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.*;
import team02.issue_tracker.oauth.exception.InvalidGithubUserRequestException;
import team02.issue_tracker.oauth.utils.GithubApiProperties;
import team02.issue_tracker.oauth.utils.JwtUtils;
import team02.issue_tracker.service.UserService;

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

    public OAuthService(WebClient webClient) {

    }

    public JwtResponse issueJwtForWeb(final String code) {
        GithubUserProfile githubUserProfile = githubUserProfileFrom(
                githubApiProperties.accessTokenRequestForWeb(code));
        return jwtUtils.codeUserToJwt(userFrom(githubUserProfile));
    }

    public JwtResponse issueJwtForIos(final String code) {
        GithubUserProfile githubUserProfile = githubUserProfileFrom(
                githubApiProperties.accessTokenRequestForIos(code));
        return jwtUtils.codeUserToJwt(userFrom(githubUserProfile));
    }

    private User userFrom(final SocialProfile socialProfile) {
        User socialProfileUser = socialProfile.becomeUser();
        User user = userService.findByUser(socialProfileUser);
        if (user == null) {
            user = userService.enroll(socialProfileUser);
        }
        return user;
    }

    private GithubUserProfile githubUserProfileFrom(
            final GithubAccessTokenRequestDto accessTokenRequest) {
        return githubUserProfileFrom(
                accessTokenFrom(accessTokenRequest, githubApiProperties.accessTokenUri()));
    }

    public GithubAccessTokenResponseDto accessTokenFrom(
            final GithubAccessTokenRequestDto accessTokenRequest,
            final String accessTokenUri) {
        GithubAccessTokenResponseDto accessTokenResponse = webClient.post()
                .uri(accessTokenUri)
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
            final GithubAccessTokenResponseDto accessTokenResponse) {
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

package team02.issue_tracker.oauth.service;

import io.netty.channel.ChannelOption;
import io.netty.handler.timeout.ReadTimeoutHandler;
import io.netty.handler.timeout.WriteTimeoutHandler;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import reactor.netty.http.client.HttpClient;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.*;
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

    public OAuthService(UserService userService, JwtUtils jwtUtils
            , GithubApiProperties githubApiProperties) {
        this.userService = userService;
        this.jwtUtils = jwtUtils;
        this.githubApiProperties = githubApiProperties;
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
        User userSocialProfile = socialProfile.becomeUser();
        User user = userService.findByUser(userSocialProfile);
        if (user == null) {
            user = userService.enroll(userSocialProfile);
        }
        return user;
    }

    private GithubUserProfile githubUserProfileFrom(
            GithubAccessTokenRequestDto accessTokenRequest) {
        return githubUserProfileFrom(accessTokenByWebFlux(accessTokenRequest));
    }

    private GithubAccessTokenResponseDto accessTokenFrom(
            GithubAccessTokenRequestDto accessTokenRequest) {
        RequestEntity<GithubAccessTokenRequestDto> request = RequestEntity
                .post(githubApiProperties.accessTokenUri())
                .header("Accept", "application/json")
                .body(accessTokenRequest);

        ResponseEntity<GithubAccessTokenResponseDto> response =
                new RestTemplate().exchange(request, GithubAccessTokenResponseDto.class);
        return response.getBody();
    }

    private GithubAccessTokenResponseDto accessTokenByWebFlux(GithubAccessTokenRequestDto accessTokenRequest) {
        HttpClient httpClient = HttpClient.create()
                .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 5000)
                .responseTimeout(Duration.ofSeconds(1))
                .doOnConnected(conn -> conn
                        .addHandlerLast(new ReadTimeoutHandler(5))
                        .addHandlerLast(new WriteTimeoutHandler(5))
                );

        WebClient webClient = WebClient.builder()
                .clientConnector(new ReactorClientHttpConnector(httpClient))
                .build();

        Mono<GithubAccessTokenResponseDto> mono = webClient.post()
                .uri(githubApiProperties.accessTokenUri())
                .accept(MediaType.APPLICATION_JSON)
                .bodyValue(accessTokenRequest)
                .retrieve()
                .bodyToMono(GithubAccessTokenResponseDto.class);

        GithubAccessTokenResponseDto result = mono.blockOptional().orElseThrow(IllegalArgumentException::new);
        log.info("access token from GitHub : {}", result);
        return result;
    }

    private GithubUserProfile githubUserProfileFrom(
            GithubAccessTokenResponseDto githubAccessTokenResponseDto) {
        RequestEntity githubUserProfileRequest = RequestEntity
                .get(githubApiProperties.userInfoUri())
                .header("Authorization"
                        , "token " + githubAccessTokenResponseDto.getAccessToken())
                .build();

        ResponseEntity<GithubUserProfile> githubUserProfileResponse =
                new RestTemplate().exchange(githubUserProfileRequest, GithubUserProfile.class);
        GithubUserProfile githubUserProfile = githubUserProfileResponse.getBody();
        log.info("github user profile : {}", githubUserProfile.toString());
        return githubUserProfile;
    }
}

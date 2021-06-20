package team02.issue_tracker.oauth.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import team02.issue_tracker.oauth.dto.*;
import team02.issue_tracker.oauth.dto.github.GithubAccessTokenRequest;
import team02.issue_tracker.oauth.dto.github.GithubAccessToken;
import team02.issue_tracker.oauth.dto.github.GithubUserProfile;
import team02.issue_tracker.oauth.exception.InvalidGithubUserRequestException;

@Slf4j
@Service
public class GithubLoginService implements OAuthService {

    @Value("${oauth.github.web.client_id}")
    private String githubWebClientId;

    @Value("${oauth.github.web.client_secret}")
    private String githubWebClientSecret;

    @Value("${oauth.github.ios.client_id}")
    private String githubIosClientId;

    @Value("${oauth.github.ios.client_secret}")
    private String githubIosClientSecret;

    private final String GITHUB_WEB_REDIRECT_URI = "http://localhost:3000/login/github";
    private final String GITHUB_IOS_REDIRECT_URI = "issueTracker://login";
    private final String GITHUB_ACCESS_TOKEN_URI = "https://github.com/login/oauth/access_token";
    private final String GITHUB_USER_INFO_URI = "https://api.github.com/user";

    private final WebClient webClient;

    public GithubLoginService(WebClient webClient) {
        this.webClient = webClient;
    }

    @Override
    public AccessToken accessToken(final String code, final SocialLogin oauthResource) {
        GithubAccessTokenRequest request = null;
        if (oauthResource == SocialLogin.GITHUB_WEB) {
            request = accessTokenRequest(
                    githubWebClientId, githubWebClientSecret, GITHUB_WEB_REDIRECT_URI, code);
        } else if (oauthResource == SocialLogin.GITHUB_IOS) {
            request = accessTokenRequest(
                    githubIosClientId, githubIosClientSecret, GITHUB_IOS_REDIRECT_URI, code);
        }
        return accessToken(request, GITHUB_ACCESS_TOKEN_URI);
    }

    // Overloading
    public AccessToken accessToken(
            final AccessTokenRequest accessTokenRequest, final String accessTokenUri) {
        GithubAccessToken accessToken = webClient.post()
                .uri(accessTokenUri)
                .accept(MediaType.APPLICATION_JSON)
                .bodyValue(accessTokenRequest)
                .retrieve()
                .bodyToMono(GithubAccessToken.class)
                .blockOptional()
                .orElseThrow(IllegalArgumentException::new);
        log.info("access token from GitHub : {}", accessToken.toString());
        return accessToken;
    }

    @Override
    public SocialProfile userProfile(final AccessToken accessToken) {
        return userProfile(accessToken, GITHUB_USER_INFO_URI);
    }

    // Overloading
    public SocialProfile userProfile(final AccessToken accessToken, final String userInfoUri) {
        GithubUserProfile githubUserProfile = webClient.get()
                .uri(userInfoUri)
                .header(HttpHeaders.AUTHORIZATION
                        , "token " + accessToken.accessToken())
                .retrieve()
                .bodyToMono(GithubUserProfile.class)
                .blockOptional()
                .orElseThrow(InvalidGithubUserRequestException::new);
        log.info("github user profile : {}", githubUserProfile.toString());
        return githubUserProfile;
    }

    private GithubAccessTokenRequest accessTokenRequest(
            final String clientId, final String clientSecret
            , final String redirectUri, final String code) {
        return GithubAccessTokenRequest.builder()
                .clientId(clientId)
                .clientSecret(clientSecret)
                .redirectUri(redirectUri)
                .code(code)
                .build();
    }
}

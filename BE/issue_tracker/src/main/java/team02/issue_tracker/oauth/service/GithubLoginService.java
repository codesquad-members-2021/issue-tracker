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
import team02.issue_tracker.oauth.exception.InvalidAccessTokenRequestException;
import team02.issue_tracker.oauth.exception.InvalidUserRequestException;

@Slf4j
@Service
public class GithubLoginService {

    private final String GITHUB_WEB_REDIRECT_URI = "http://localhost:3000/login/github";
    private final String GITHUB_IOS_REDIRECT_URI = "issueTracker://login";
    private final String GITHUB_ACCESS_TOKEN_URI = "https://github.com/login/oauth/access_token";
    private final String GITHUB_USER_INFO_URI = "https://api.github.com/user";

    private final WebClient webClient;

    @Value("${oauth.github.web.client_id}")
    private String githubWebClientId;

    @Value("${oauth.github.web.client_secret}")
    private String githubWebClientSecret;

    @Value("${oauth.github.ios.client_id}")
    private String githubIosClientId;

    @Value("${oauth.github.ios.client_secret}")
    private String githubIosClientSecret;

    public GithubLoginService(WebClient webClient) {
        this.webClient = webClient;
    }

    public SocialProfile requestUserProfileWeb(final String code) {
        GithubAccessTokenRequest request = accessTokenRequest(
                githubWebClientId, githubWebClientSecret, GITHUB_WEB_REDIRECT_URI, code);
        AccessToken accessToken = getAccessToken(request, GITHUB_ACCESS_TOKEN_URI);
        return getUserProfile(accessToken);
    }

    public SocialProfile requestUserProfileIos(final String code) {
        GithubAccessTokenRequest request = accessTokenRequest(
                githubIosClientId, githubIosClientSecret, GITHUB_IOS_REDIRECT_URI, code);
        AccessToken accessToken = getAccessToken(request, GITHUB_ACCESS_TOKEN_URI);
        return getUserProfile(accessToken);
    }

    public AccessToken getAccessToken(
            final AccessTokenRequest accessTokenRequest, final String accessTokenUri) {
        GithubAccessToken accessToken = webClient.post()
                .uri(accessTokenUri)
                .accept(MediaType.APPLICATION_JSON)
                .bodyValue(accessTokenRequest)
                .retrieve()
                .bodyToMono(GithubAccessToken.class)
                .blockOptional()
                .orElseThrow(InvalidAccessTokenRequestException::new);
        log.info("access token from GitHub : {}", accessToken.toString());
        return accessToken;
    }

    public SocialProfile getUserProfile(final AccessToken accessToken) {
        return getUserProfile(accessToken, GITHUB_USER_INFO_URI);
    }

    // Overloading
    public SocialProfile getUserProfile(final AccessToken accessToken, final String userInfoUri) {
        GithubUserProfile githubUserProfile = webClient.get()
                .uri(userInfoUri)
                .header(HttpHeaders.AUTHORIZATION
                        , "token " + accessToken.value())
                .retrieve()
                .bodyToMono(GithubUserProfile.class)
                .blockOptional()
                .orElseThrow(InvalidUserRequestException::new);
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

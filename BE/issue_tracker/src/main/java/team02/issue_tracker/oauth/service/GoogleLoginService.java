package team02.issue_tracker.oauth.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import team02.issue_tracker.oauth.dto.AccessToken;
import team02.issue_tracker.oauth.dto.AccessTokenRequest;
import team02.issue_tracker.oauth.dto.SocialLogin;
import team02.issue_tracker.oauth.dto.google.GoogleAccessToken;
import team02.issue_tracker.oauth.dto.google.GoogleAccessTokenRequest;
import team02.issue_tracker.oauth.dto.google.GoogleUserProfile;
import team02.issue_tracker.oauth.dto.SocialProfile;
import team02.issue_tracker.oauth.exception.InvalidGithubAccessTokenRequestException;

@Slf4j
@Service
public class GoogleLoginService implements OAuthService {

    @Value("${oauth.google.web.client_id}")
    private String clientId;

    @Value("${oauth.google.web.client_secret}")
    private String clientSecret;

    private final String ACCESS_TOKEN_URI = "https://oauth2.googleapis.com/token";
    private final String REDIRECT_URI = "http://localhost:8080/api/login/google";
    private final String GRANT_TYPE = "authorization_code";
    private final String USER_INFO_URI = "https://www.googleapis.com/oauth2/v1/userinfo";

    private final WebClient webClient;

    public GoogleLoginService(WebClient webClient) {
        this.webClient = webClient;
    }

    @Override
    public AccessToken accessToken(final String code, final SocialLogin oauthResource) {
        AccessTokenRequest request =
                accessTokenRequest(clientId, clientSecret, REDIRECT_URI, GRANT_TYPE, code);
        return accessToken(request, ACCESS_TOKEN_URI);
    }

    // Overloading
    public AccessToken accessToken(
            final AccessTokenRequest request, final String accessTokenUri) {
        GoogleAccessToken googleAccessTokenResponse = webClient.post()
                .uri(accessTokenUri)
                .accept(MediaType.APPLICATION_JSON)
                .bodyValue(request)
                .retrieve()
                .bodyToMono(GoogleAccessToken.class)
                .blockOptional()
                .orElseThrow(InvalidGithubAccessTokenRequestException::new);
        log.info("access token from: {}", googleAccessTokenResponse.toString());
        return googleAccessTokenResponse;
    }

    @Override
    public SocialProfile userProfile(final AccessToken accessToken) {
        return userProfile(accessToken, USER_INFO_URI);
    }

    // Overloading
    public SocialProfile userProfile(
            final AccessToken accessToken, final String userInfoUri) {
        GoogleUserProfile googleUserProfile = webClient.get()
                .uri(userInfoUri)
                .header(HttpHeaders.AUTHORIZATION,
                        "Bearer " + accessToken.accessToken())
                .retrieve()
                .bodyToMono(GoogleUserProfile.class)
                .blockOptional()
                .orElseThrow(IllegalStateException::new);
        log.info("Google user : {}", googleUserProfile);
        return googleUserProfile;
    }

    private GoogleAccessTokenRequest accessTokenRequest(
            final String clientId, final String clientSecret,
            final String redirectUri, final String grantType, final String code) {
        return GoogleAccessTokenRequest.builder()
                .clientId(clientId)
                .clientSecret(clientSecret)
                .redirectUri(redirectUri)
                .grantType(grantType)
                .code(code)
                .build();
    }
}

package team02.issue_tracker.oauth.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;
import team02.issue_tracker.oauth.dto.AccessToken;
import team02.issue_tracker.oauth.dto.google.GoogleAccessToken;
import team02.issue_tracker.oauth.dto.google.GoogleUserProfile;
import team02.issue_tracker.oauth.dto.SocialProfile;
import team02.issue_tracker.oauth.exception.InvalidAccessTokenRequestException;
import team02.issue_tracker.oauth.exception.InvalidUserRequestException;

@Slf4j
@Service
public class GoogleLoginService {

    private final String ACCESS_TOKEN_URI = "https://oauth2.googleapis.com/token";
    private final String REDIRECT_URI = "http://localhost:3000/login/google";
    private final String GRANT_TYPE = "authorization_code";
    private final String USER_INFO_URI = "https://www.googleapis.com/oauth2/v1/userinfo";

    private final WebClient webClient;

    @Value("${oauth.google.web.client_id}")
    private String clientId;

    @Value("${oauth.google.web.client_secret}")
    private String clientSecret;

    public GoogleLoginService(WebClient webClient) {
        this.webClient = webClient;
    }

    public SocialProfile requestUserProfile(final String code) {
        AccessToken accessToken = getAccessToken(code);
        return getUserProfile(accessToken);
    }

    private AccessToken getAccessToken(final String code) {
        MultiValueMap<String, String> fieldsForRequest = new LinkedMultiValueMap<>();
        fieldsForRequest.add("client_id", clientId);
        fieldsForRequest.add("client_secret", clientSecret);
        fieldsForRequest.add("redirect_uri", REDIRECT_URI);
        fieldsForRequest.add("code", code);
        fieldsForRequest.add("grant_type", GRANT_TYPE);

        GoogleAccessToken googleAccessTokenResponse = webClient.post()
                .uri(ACCESS_TOKEN_URI)
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .bodyValue(fieldsForRequest)
                .retrieve()
                .bodyToMono(GoogleAccessToken.class)
                .blockOptional()
                .orElseThrow(InvalidAccessTokenRequestException::new);
        log.info("access token from: {}", googleAccessTokenResponse.toString());
        return googleAccessTokenResponse;
    }

    private SocialProfile getUserProfile(final AccessToken accessToken) {
        GoogleUserProfile googleUserProfile = webClient.get()
                .uri(USER_INFO_URI)
                .header(HttpHeaders.AUTHORIZATION,
                        "Bearer " + accessToken.value())
                .retrieve()
                .bodyToMono(GoogleUserProfile.class)
                .blockOptional()
                .orElseThrow(InvalidUserRequestException::new);
        log.info("Google user : {}", googleUserProfile);
        return googleUserProfile;
    }
}

package team02.issue_tracker.oauth.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriBuilder;
import team02.issue_tracker.oauth.dto.AccessToken;
import team02.issue_tracker.oauth.dto.SocialLogin;
import team02.issue_tracker.oauth.dto.SocialProfile;
import team02.issue_tracker.oauth.dto.naver.NaverAccessToken;
import team02.issue_tracker.oauth.dto.naver.NaverUserProfile;
import team02.issue_tracker.oauth.exception.InvalidAccessTokenRequestException;
import team02.issue_tracker.oauth.exception.InvalidUserRequestException;

@Slf4j
@Service
public class NaverLoginService implements OAuthService {

    private final String USER_INFO_URI = "https://openapi.naver.com/v1/nid/me";
    private final String REDIRECT_URI = "http://localhost:8080/api/login/naver";
    private final String GRANT_TYPE = "authorization_code";

    @Value("${oauth.naver.web.client_id}")
    private String clientId;

    @Value("${oauth.naver.web.client_secret}")
    private String clientSecret;

    private final WebClient webClient;

    public NaverLoginService(WebClient webClient) {
        this.webClient = webClient;
    }

    @Override
    public AccessToken accessToken(String code, SocialLogin oauthResource) {
        NaverAccessToken naverAccessToken = webClient.post()
                .uri(uriBuilder -> uriBuilder
                        .scheme("https")
                        .host("nid.naver.com")
                        .path("/oauth2.0/token")
                        .queryParam("grant_type", GRANT_TYPE)
                        .queryParam("client_id", clientId)
                        .queryParam("client_secret", clientSecret)
                        .queryParam("code", code)
                        .queryParam("status", "200")
                        .build())
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(NaverAccessToken.class)
                .blockOptional()
                .orElseThrow(InvalidAccessTokenRequestException::new);
        log.info("access token : {}", naverAccessToken.toString());
        return naverAccessToken;
    }

    @Override
    public SocialProfile userProfile(AccessToken accessToken) {
        NaverUserProfile naverUserProfile = webClient.get()
                .uri(USER_INFO_URI)
                .header("Authorization", "Bearer " + accessToken.value())
                .retrieve()
                .bodyToMono(NaverUserProfile.class)
                .blockOptional()
                .orElseThrow(InvalidUserRequestException::new);
        log.info("naver user profile : {}", naverUserProfile.toString());
        return naverUserProfile;
    }
}

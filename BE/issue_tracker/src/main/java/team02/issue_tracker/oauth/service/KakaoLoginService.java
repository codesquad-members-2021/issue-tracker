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
import team02.issue_tracker.oauth.dto.SocialProfile;
import team02.issue_tracker.oauth.dto.kakao.KakaoAccessToken;
import team02.issue_tracker.oauth.dto.kakao.KakaoUserProfile;
import team02.issue_tracker.oauth.exception.InvalidAccessTokenRequestException;
import team02.issue_tracker.oauth.exception.InvalidUserRequestException;

@Slf4j
@Service
public class KakaoLoginService {

    private final String REDIRECT_URI = "http://localhost:3000/login/kakao";
    private final String ACCESS_TOKEN_URI = "https://kauth.kakao.com/oauth/token";
    private final String USER_INFO_URI = "https://kapi.kakao.com/v2/user/me";
    private final String GRANT_TYPE = "authorization_code";

    private final WebClient webClient;

    @Value("${oauth.kakao.web.client_id}")
    private String clientId;

    @Value("${oauth.kakao.web.client_secret}")
    private String clientSecret;

    public KakaoLoginService(WebClient webClient) {
        this.webClient = webClient;
    }

    public SocialProfile requestUserProfile(final String code) {
        AccessToken accessToken = getAccessToken(code);
        return getUserProfile(accessToken);
    }

    private AccessToken getAccessToken(String code) {
        MultiValueMap<String, String> parametersForRequest = new LinkedMultiValueMap<>();
        parametersForRequest.add("grant_type", GRANT_TYPE);
        parametersForRequest.add("client_id", clientId);
        parametersForRequest.add("redirect_uri", REDIRECT_URI);
        parametersForRequest.add("client_secret", clientSecret);
        parametersForRequest.add("code", code);

        KakaoAccessToken kakaoAccessToken = webClient.post()
                .uri(ACCESS_TOKEN_URI)
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .bodyValue(parametersForRequest)
                .retrieve()
                .bodyToMono(KakaoAccessToken.class)
                .blockOptional()
                .orElseThrow(InvalidAccessTokenRequestException::new);
        log.info("kakao access token : {}", kakaoAccessToken.toString());
        return kakaoAccessToken;
    }

    private SocialProfile getUserProfile(AccessToken accessToken) {
        KakaoUserProfile kakaoUserProfile = webClient.post()
                .uri(USER_INFO_URI)
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken.value())
                .retrieve()
                .bodyToMono(KakaoUserProfile.class)
                .blockOptional()
                .orElseThrow(InvalidUserRequestException::new);
        log.info("kakao user profile : {}", kakaoUserProfile.toString());
        return kakaoUserProfile;
    }
}

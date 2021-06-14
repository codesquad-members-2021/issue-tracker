package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.dto.GoogleTokenDTO;
import com.codesquad.issuetracker.dto.GoogleUserInfoDTO;
import com.codesquad.issuetracker.exception.InvalidAccessTokenException;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

@Service
public class GoogleOauthService implements OauthService{

    private static final String REDIRECT_URI = "http://localhost:8080/user/login/oauth/google";
    private static final String ACCESS_TOKEN_URI = "https://oauth2.googleapis.com/token";
    private static final String ACCESS_USER_INFO_URI = "https://api.github.com/user";
    private final String clientId = System.getenv("GOOGLE_CLIENT_ID");
    private final String clientSecret = System.getenv("GOOGLE_CLIENT_SECRET");

    @Override
    public String getAccessToken(String code) {

        MultiValueMap<String, String> accessTokenRequest = new LinkedMultiValueMap<>();
        accessTokenRequest.add("client_id", clientId);
        accessTokenRequest.add("client_secret", clientSecret);
        accessTokenRequest.add("code", code);
        accessTokenRequest.add("grant_type", "authorization_code");
        accessTokenRequest.add("redirect_uri", REDIRECT_URI);

        RequestEntity<MultiValueMap<String, String>> requestEntity = RequestEntity
                .post(ACCESS_TOKEN_URI)
                .header("Accept", "application/json")
                .body(accessTokenRequest);

        return restTemplate.exchange(requestEntity, GoogleTokenDTO.class).getBody().getAccessToken();
    }

    @Override
    public GoogleUserInfoDTO getUserInfo(String accessToken) {

        RequestEntity<Void> userInfoRequest = RequestEntity.get(ACCESS_USER_INFO_URI)
                .header("Authorization", "Bearer " + accessToken)
                .build();

        GoogleUserInfoDTO userInfo = restTemplate.exchange(userInfoRequest, GoogleUserInfoDTO.class).getBody();

        if (userInfo == null) {
            throw new InvalidAccessTokenException();
        }

        return userInfo;
    }
}

package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.dto.GithubTokenDTO;
import com.codesquad.issuetracker.dto.GithubUserInfoDTO;
import com.codesquad.issuetracker.exception.InvalidAccessTokenException;
import com.codesquad.issuetracker.repository.UserRepository;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

@Service
public class GithubOauthService implements OauthService{

    private static final String ACCESS_TOKEN_URI = "https://github.com/login/oauth/access_token";
    private static final String ACCESS_USER_INFO_URI = "https://api.github.com/user";
    private final String clinetId = System.getenv("GITHUB_CLIENT_ID");
    private final String clientSecret = System.getenv("GITHUB_CLIENT_SECRET");

    @Override
    public String getAccessToken(String code) {

        MultiValueMap<String, String> requestBody = new LinkedMultiValueMap<>();
        requestBody.add("client_id", clinetId);
        requestBody.add("client_secret", clientSecret);
        requestBody.add("code", code);

        RequestEntity<MultiValueMap<String, String>> accessTokenRequest = RequestEntity.post(ACCESS_TOKEN_URI)
                .header("Accept", "application/json")
                .body(requestBody);

        GithubTokenDTO accessToken = restTemplate.exchange(accessTokenRequest, GithubTokenDTO.class).getBody();

        if (accessToken == null) {
            throw new RuntimeException("access token is not valid");
        }

        return accessToken.getAccessToken();
    }

    @Override
    public GithubUserInfoDTO getUserInfo(String accessToken) {

        RequestEntity<Void> emailRequest = RequestEntity.get(ACCESS_USER_INFO_URI)
                .header("Authorization", accessToken)
                .build();

        GithubUserInfoDTO githubUser = restTemplate.exchange(emailRequest, GithubUserInfoDTO.class).getBody();
        if (githubUser == null) {
            throw new InvalidAccessTokenException();
        }

        return githubUser;
    }
}

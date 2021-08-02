package com.codesquad.issuetracker.auth.service;

import com.codesquad.issuetracker.auth.UserPlatform;
import com.codesquad.issuetracker.auth.domain.GitHubUser;
import com.codesquad.issuetracker.auth.domain.JwtAuthenticationInfo;
import com.codesquad.issuetracker.auth.request.AccessTokenRequest;
import com.codesquad.issuetracker.auth.response.AccessTokenResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.env.Environment;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Service
@Slf4j
public class GitHubOauthService {


    private static final String GITHUB_ACCESS_TOKEN_URL = "https://github.com/login/oauth/access_token";
    private static final String GITHUB_USER_URL = "https://api.github.com/user";

    private final String gitHubClientId;
    private final String gitHubClientSecrets;

    private final String gitHubClientIdIOS;
    private final String gitHubClientSecretsIos;

    public GitHubOauthService(Environment environment) {
        this.gitHubClientId = environment.getProperty("github.client.id");
        this.gitHubClientSecrets = environment.getProperty("github.client.secrets");
        this.gitHubClientIdIOS = environment.getProperty("github.client.id.ios");
        this.gitHubClientSecretsIos = environment.getProperty("github.client.secrets.ios");
    }

    public JwtAuthenticationInfo login(String code, UserPlatform platform) {
        if (platform == UserPlatform.WEB) {
            return authorize(gitHubClientId, gitHubClientSecrets, code);
        }
        return authorize(gitHubClientIdIOS, gitHubClientSecretsIos, code);
    }

    public JwtAuthenticationInfo authorize(String clientId, String clientSecret, String code) {
        AccessTokenResponse accessTokenResponse = accessToken(clientId, clientSecret, code)
                .orElseThrow(IllegalArgumentException::new);
        log.debug("Access token : {}", accessTokenResponse.getAccessToken());

        GitHubUser user = getUserInfo(accessTokenResponse.getAccessToken()).orElseThrow(IllegalArgumentException::new);
        return JwtAuthenticationInfo.create(user, accessTokenResponse.getTokenType());
    }

    private Optional<AccessTokenResponse> accessToken(String clientId, String clientSecrets, String code) {
        RequestEntity<AccessTokenRequest> accessTokenRequestEntity = RequestEntity.post(GITHUB_ACCESS_TOKEN_URL) // 보낼 request를 만듦
                .header("Accept", "application/json")// 받아올 리턴 값을 json형식으로 설정
                .body(AccessTokenRequest.create(clientId, clientSecrets, code));

        return Optional.ofNullable(
                new RestTemplate()
                        .exchange(accessTokenRequestEntity, AccessTokenResponse.class)
                        .getBody()); // 액세스토큰 받아오기
    }

    private Optional<GitHubUser> getUserInfo(String accessToken) {
        RequestEntity<Void> githubUserInfoRequestEntity = RequestEntity.get(GITHUB_USER_URL)// body에 아무것도 보내지 않으므로 Void로 설정
                .header("Accept", "application/json")
                .header("Authorization", "token " + accessToken)
                .build();

        return Optional.ofNullable(
                new RestTemplate()
                        .exchange(githubUserInfoRequestEntity, GitHubUser.class)
                        .getBody());
    }
}

package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.AccessTokenResponse;
import com.codesquad.issuetracker.domain.User;
import com.codesquad.issuetracker.request.AccessTokenRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.env.Environment;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class LoginService {

    private Logger logger = LoggerFactory.getLogger(LoginService.class);

    private static final String GITHUB_ACCESS_TOKEN_URL = "https://github.com/login/oauth/access_token";
    private static final String GITHUB_USER_URL = "https://api.github.com/user";
    private final String GITHUB_CLIENT_ID;
    private final String GITHUB_CLIENT_SECRETS;

    public LoginService(Environment environment) {
        GITHUB_CLIENT_ID = environment.getProperty("github.client.id");
        GITHUB_CLIENT_SECRETS = environment.getProperty("github.client.secrets");
    }

    // login
    public RequestEntity githubLogin(String code) {
        return createJwt(code);
    }

    // 유저 정보를 받고 그걸로 토큰 만들기.
    private RequestEntity createJwt(String code) {
        RequestEntity<AccessTokenRequest> accessTokenRequestEntity = RequestEntity.post(GITHUB_ACCESS_TOKEN_URL) // 보낼 request를 만듦
                .header("Accept", "application/json")// 받아올 리턴 값을 json형식으로 설정
                .body(AccessTokenRequest.create(GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRETS, code));

        RestTemplate restTemplate = new RestTemplate(); // RestTemplate : 요청을 보내기 또는 응답을 받기
        AccessTokenResponse accessTokenResponse = restTemplate.exchange(accessTokenRequestEntity, AccessTokenResponse.class).getBody(); // 액세스토큰 받아오기

        logger.debug("access token : {}", accessTokenResponse.getAccessToken());

        RequestEntity<Void> githubUserInfoRequestEntity = RequestEntity.get(GITHUB_USER_URL)// body에 아무것도 보내지 않으므로 Void로 설정
                .header("Accept", "application/json")
                .header("Authorization", "token " + accessTokenResponse.getAccessToken())
                .build();
        //User user = restTemplate.exchange(githubUserInfoRequestEntity, User.class).getBody();

        return githubUserInfoRequestEntity;
    }

    private User getUser() {
        return null;
    }
}

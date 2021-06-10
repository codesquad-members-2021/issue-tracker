package com.team11.issue.oauth;

import com.team11.issue.dto.oauth.AccessTokenDTO;
import com.team11.issue.dto.oauth.UserInfoDTO;
import com.team11.issue.dto.user.LoginRequestDTO;
import com.team11.issue.exception.OauthException;
import com.team11.issue.oauth.errorHandler.RestTemplateResponseErrorHandler;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

@Component
public class GitHubOauth implements Oauth {

    private static final String CLIENT_ID = "client_id";
    private static final String CLIENT_SECRET = "client_secret";

    private static final String CODE = "code";
    private static final String TOKEN = "token";

    private final RestTemplate restTemplate;
    private final GitHubOauthConfig gitHubOauthConfig;

    public GitHubOauth(GitHubOauthConfig gitHubOauthConfig, RestTemplateBuilder restTemplateBuilder) {
        this.gitHubOauthConfig = gitHubOauthConfig;
        this.restTemplate = restTemplateBuilder
                .errorHandler(new RestTemplateResponseErrorHandler())
                .build();
    }

    private GitHubOauthConfig getGitHubOauthConfig(LoginRequestDTO loginRequestDTO) {
        String type = loginRequestDTO.getType();

        if (!(type.equals("fe") || type.equals("ios"))) {
            throw new OauthException("적절한 type 값이 아닙니다.");
        }

        gitHubOauthConfig.setGitHubOauthInfo(type);
        return gitHubOauthConfig;
    }

    @Override
    public Optional<String> getAccessToken(LoginRequestDTO loginRequestDTO) {

        getGitHubOauthConfig(loginRequestDTO);

        MultiValueMap<String, String> parameters = new LinkedMultiValueMap<String, String>();
        parameters.add(CLIENT_ID, gitHubOauthConfig.getClientId());
        parameters.add(CLIENT_SECRET, gitHubOauthConfig.getClientSecret());
        parameters.add(CODE, loginRequestDTO.getCode());

        return Optional.ofNullable(restTemplate.postForObject(GitHubOauthConfig.GitHubUrl.ACCESS_TOKEN_URL.getUrl(), parameters, AccessTokenDTO.class).getAccessToken());
    }

    @Override
    public UserInfoDTO getUserInfoFromGitHub(String accessToken) {

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set(HttpHeaders.AUTHORIZATION, TOKEN + " " + accessToken);
        HttpEntity httpEntity = new HttpEntity<>(httpHeaders);

        ResponseEntity<UserInfoDTO> userInfoDTO = restTemplate.exchange(GitHubOauthConfig.GitHubUrl.USER_INFO_URL.getUrl(), HttpMethod.GET, httpEntity, UserInfoDTO.class);
        return userInfoDTO.getBody();
    }
}

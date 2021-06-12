package com.team11.issue.oauth;

import com.team11.issue.dto.oauth.AccessTokenDTO;
import com.team11.issue.dto.oauth.UserInfoDTO;
import com.team11.issue.dto.user.LoginRequestDTO;
import com.team11.issue.exception.OauthException;
import com.team11.issue.oauth.errorHandler.RestTemplateResponseErrorHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
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

@RequiredArgsConstructor
@Component
public class GitHubOauth implements Oauth {

    private static final String CLIENT_ID = "client_id";
    private static final String CLIENT_SECRET = "client_secret";

    private static final String CODE = "code";
    private static final String TOKEN = "token";

    private final RestTemplate restTemplate = new RestTemplateBuilder()
            .errorHandler(new RestTemplateResponseErrorHandler())
            .build();

    private final GitHubOauthUtil gitHubOauthUtil;


    private GitHubOauthUtil getGitHubOauthConfig(LoginRequestDTO loginRequestDTO) {
        String type = loginRequestDTO.getType();

        if (!(type.equals("fe") || type.equals("ios"))) {
            throw new OauthException("적절한 type 값이 아닙니다.");
        }

        gitHubOauthUtil.setGitHubOauthInfo(type);
        return gitHubOauthUtil;
    }

    @Override
    public Optional<String> getAccessToken(LoginRequestDTO loginRequestDTO) {

        getGitHubOauthConfig(loginRequestDTO);

        MultiValueMap<String, String> parameters = new LinkedMultiValueMap<String, String>();
        parameters.add(CLIENT_ID, gitHubOauthUtil.getClientId());
        parameters.add(CLIENT_SECRET, gitHubOauthUtil.getClientSecret());
        parameters.add(CODE, loginRequestDTO.getCode());

        return Optional.ofNullable(restTemplate.postForObject(gitHubOauthUtil.getAccessTokenUrl(), parameters, AccessTokenDTO.class).getAccessToken());
    }

    @Override
    public UserInfoDTO getUserInfoFromGitHub(String accessToken) {

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set(HttpHeaders.AUTHORIZATION, TOKEN + " " + accessToken);
        HttpEntity httpEntity = new HttpEntity<>(httpHeaders);

        ResponseEntity<UserInfoDTO> userInfoDTO = restTemplate.exchange(gitHubOauthUtil.getUserInfoUrl(), HttpMethod.GET, httpEntity, UserInfoDTO.class);
        return userInfoDTO.getBody();
    }
}

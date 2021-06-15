package com.codesqaude.cocomarco.domain.user;

import com.codesqaude.cocomarco.domain.user.dto.AccessTokenRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;

@Component
public class GitOauth implements Oauth {

    private String clientId;
    private String clientSecret;
    private RestTemplate restTemplate = new RestTemplate();

    public GitOauth(@Value("${github.desktop.client.id}") String clientId, @Value("${github.desktop.secret}") String clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    @Override
    public AccessToken accessToken(String code) {
        HttpHeaders httpHeaders = httpHeadersTypeJson();
        HttpEntity<AccessTokenRequest> httpEntity =
                new HttpEntity<>(new AccessTokenRequest(clientId, clientSecret, code), httpHeaders);
        return restTemplate.exchange("https://github.com/login/oauth/access_token", HttpMethod.POST, httpEntity, AccessToken.class).getBody();
    }

    @Override
    public GitUserInfo userInfo(AccessToken accessToken) {
        HttpHeaders httpHeaders = httpHeadersTypeJson();
        httpHeaders.setBearerAuth(accessToken.getAccessToken());
        HttpEntity<?> userInfo = new HttpEntity<>(httpHeaders);
        return restTemplate.exchange("https://api.github.com/user", HttpMethod.GET, userInfo, GitUserInfo.class).getBody();
    }

    public HttpHeaders httpHeadersTypeJson() {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        return headers;
    }
}

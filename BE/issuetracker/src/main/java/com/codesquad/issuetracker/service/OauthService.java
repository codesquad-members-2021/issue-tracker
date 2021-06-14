package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.dto.UserInfo;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public interface OauthService {
    RestTemplate restTemplate = new RestTemplate();

    String getAccessToken(String code);

    UserInfo getUserInfo(String accessToken);
}

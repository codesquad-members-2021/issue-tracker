package com.issuetracker.auth.service;

import com.issuetracker.auth.exception.UnknownUserAgentException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GitHubService {

    @Value("${github.web.client.id}")
    private String frontClientId;

    @Value("${github.web.client.secret}")
    private String frontClientSecret;

    @Value("${github.ios.client.id}")
    private String iOSClientId;

    @Value("${github.ios.client.secret}")
    private String iOSClientSecret;

    public String getClientId(String userAgent) {
        if (UserAgent.isFront(userAgent)) {
            return frontClientId;
        }
        if (UserAgent.isIOS(userAgent)) {
            return iOSClientId;
        }
        throw new UnknownUserAgentException();
    }

    public String getClientSecret(String userAgent) {
        if (UserAgent.isFront(userAgent)) {
            return frontClientSecret;
        }
        if (UserAgent.isIOS(userAgent)) {
            return iOSClientSecret;
        }
        throw new UnknownUserAgentException();
    }
}

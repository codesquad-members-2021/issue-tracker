package com.issuetracker.auth.service;

import com.issuetracker.auth.exception.UnknownUserAgentException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GitHubService {

    private final String frontClientId;
    private final String frontClientSecret;
    private final String iOSClientId;
    private final String iOSClientSecret;

    public GitHubService(@Value("${github.web.client.id}") String frontClientId,
                         @Value("${github.web.client.secret}") String frontClientSecret,
                         @Value("${github.ios.client.id}") String iOSClientId,
                         @Value("${github.ios.client.secret}") String iOSClientSecret) {
        this.frontClientId = frontClientId;
        this.frontClientSecret = frontClientSecret;
        this.iOSClientId = iOSClientId;
        this.iOSClientSecret = iOSClientSecret;
    }

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

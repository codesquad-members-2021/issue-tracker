package com.issuetracker.auth.service;

import com.issuetracker.auth.exception.UnknownHostException;
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

    public String getClientId(String host) {
        if (Host.isFront(host)) {
            return frontClientId;
        }
        if (Host.isIOS(host)) {
            return iOSClientId;
        }
        throw new UnknownHostException();
    }

    public String getClientSecret(String host) {
        if (Host.isFront(host)) {
            return frontClientSecret;
        }
        if (Host.isIOS(host)) {
            return iOSClientSecret;
        }
        throw new UnknownHostException();
    }
}

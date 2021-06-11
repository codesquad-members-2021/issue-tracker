package com.jane_eno.issue_tracker.auth.util;

import com.jane_eno.issue_tracker.auth.exception.UnknownUserAgentException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


@Service
public class GitHubUtil {

    @Value("${github.web.client.id}")
    private String frontClientId;

    @Value("${github.web.client.secret}")
    private String frontClientSecret;

    @Value("${github.ios.client.id}")
    private String iOSClientId;

    @Value("${github.ios.client.secret}")
    private String iOSClientSecret;

    public String verifyClientId(String userAgent) {
        if (UserAgent.isFront(userAgent)) {
            return frontClientId;
        }
        if (UserAgent.isIOS(userAgent)) {
            return iOSClientId;
        }
        throw new UnknownUserAgentException();
    }

    public String verifyClientSecret(String userAgent) {
        if (UserAgent.isFront(userAgent)) {
            return frontClientSecret;
        }
        if (UserAgent.isIOS(userAgent)) {
            return iOSClientSecret;
        }
        throw new UnknownUserAgentException();
    }
}

package com.jane_eno.issue_tracker.auth.util;

import com.jane_eno.issue_tracker.auth.exception.IllegalHostException;
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

    public String verifyClientId(String host) {
        if (Host.isFront(host)) {
            return frontClientId;
        }
        if (Host.isIOS(host)) {
            return iOSClientId;
        }
        throw new IllegalHostException();
    }

    public String verifyClientSecret(String host) {
        if (Host.isFront(host)) {
            return frontClientSecret;
        }
        if (Host.isIOS(host)) {
            return iOSClientSecret;
        }
        throw new IllegalHostException();
    }
}

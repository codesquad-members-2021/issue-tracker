package com.issuetracker.auth.util;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
enum UserAgent {

    POSTMAN("PostmanRuntime"),
    FRONT("IssueTrackerFE"),
    IOS("IssueTrackerIOS");

    private final String userAgent;

    public static boolean isFront(String userAgent) {
        String product = getUserAgent(userAgent);
        return FRONT.userAgent.equals(product) || POSTMAN.userAgent.equals(product);
    }

    public static boolean isIOS(String userAgent) {
        String product = getUserAgent(userAgent);
        return IOS.userAgent.equals(product) || POSTMAN.userAgent.equals(product);
    }

    private static String getUserAgent(String userAgent) {
        return userAgent.split("/")[0];
    }
}

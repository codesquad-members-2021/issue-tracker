package com.issuetracker.auth.service;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
enum UserAgent {

    POSTMAN("PostmanRuntime"),
    FRONT("Mozilla"),
    IOS("IssueTrackerIOS");

    private final String userAgent;

    public static boolean isFront(String userAgent) {
        return FRONT.userAgent.equals(userAgent) || POSTMAN.userAgent.equals(userAgent);
    }

    public static boolean isIOS(String userAgent) {
        return IOS.userAgent.equals(userAgent) || POSTMAN.userAgent.equals(userAgent);
    }
}

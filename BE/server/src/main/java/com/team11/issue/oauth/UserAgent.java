package com.team11.issue.oauth;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
enum UserAgent {

    FRONT("IssueTrackerFE"),
    IOS("IssueTrackerIOS");

    private final String userAgent;

    public static boolean isFront(String userAgent) {
        return FRONT.userAgent.equals(userAgent);
    }

    public static boolean isIOS(String userAgent) {
        return IOS.userAgent.equals(userAgent);
    }

}

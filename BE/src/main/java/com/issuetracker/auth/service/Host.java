package com.issuetracker.auth.service;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
enum Host {

    POSTMAN("localhost:8080"),
    FRONT_LOCAL("localhost:3000"),
    WEB("3.37.76.224"),
    IOS("IssueTrackerIOS");

    private final String host;

    public static boolean isFront(String host) {
        return FRONT_LOCAL.host.equals(host) || WEB.host.equals(host) || POSTMAN.host.equals(host);
    }

    public static boolean isIOS(String host) {
        return IOS.host.equals(host) || POSTMAN.host.equals(host);
    }
}


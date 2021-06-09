package com.jane_eno.issue_tracker.auth.util;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
enum Host {
    LOCAL_BACK("localhost:8080"),
    LOCAL_FRONT("localhost:3000"),
    WEB("3.37.76.224"),
    IOS("codeissue://tracker");

    public final String host;

    public static boolean isFront(String host) {
        return LOCAL_BACK.host.equals(host) || LOCAL_FRONT.host.equals(host) || WEB.host.equals(host);
    }

    public static boolean isIOS(String host) {
        return IOS.host.equals(host);
    }
}

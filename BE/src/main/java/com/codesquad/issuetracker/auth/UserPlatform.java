package com.codesquad.issuetracker.auth;

import com.codesquad.issuetracker.auth.exception.InvalidPlatformException;

public enum UserPlatform {
    WEB,
    IOS;

    public static UserPlatform create(String platform) {
        switch (platform.toLowerCase()) {
            case "web" :
                return WEB;
            case "ios" :
                return IOS;
        }
        throw new InvalidPlatformException("유효하지 않은 플랫폼입니다");
    }
}

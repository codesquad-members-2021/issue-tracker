package com.team11.issue.exception;

public class AccessTokenNotFoundException extends RuntimeException {

    public AccessTokenNotFoundException() {
        super("AccessToken이 존재하지 않습니다.code를 확인해 주세요.");
    }
}

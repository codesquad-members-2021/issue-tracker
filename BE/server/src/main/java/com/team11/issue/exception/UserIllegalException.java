package com.team11.issue.exception;

public class UserIllegalException extends RuntimeException {

    public UserIllegalException() {
        super("로그인한 유저는 본 글에 대한 권한이 없습니다.");
    }

    public UserIllegalException(String message) {
        super(message);
    }
}

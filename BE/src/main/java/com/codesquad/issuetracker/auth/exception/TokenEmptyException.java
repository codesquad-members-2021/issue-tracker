package com.codesquad.issuetracker.auth.exception;

public class TokenEmptyException extends RuntimeException {

    private static final String TOKEN_EMPTY = "토큰이 존재하지 않습니다";
    public TokenEmptyException() {
        super(TOKEN_EMPTY);
    }
}

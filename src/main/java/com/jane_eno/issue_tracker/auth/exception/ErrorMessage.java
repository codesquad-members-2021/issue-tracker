package com.jane_eno.issue_tracker.auth.exception;

public enum ErrorMessage {
    ENTITY_NOT_FOUND("해당 엔티티를 찾을 수 없습니다."),
    OAUTH_FAILED("OAuth 인증에 실패 했습니다."),
    INVALID_TOKEN("유효하지 않은 토큰입니다."),
    INVALID_GITHUBTYPE("유효하지 않은 타입입니다.");

    private final String errorMessage;

    ErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String getErrorMessage() {
        return errorMessage;
    }
}

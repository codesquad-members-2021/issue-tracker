package com.team11.issue.exception;

public class IssueNotFoundException extends RuntimeException {

    public IssueNotFoundException() {
        super("해당하는 이슈를 찾을 수 없습니다.");
    }

    public IssueNotFoundException(String message) {
        super(message);
    }
}

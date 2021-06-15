package com.codesquad.issuetracker.exception;

public class NoSuchIssueException extends RuntimeException {
    private static final String NO_ISSUE = "해당 이슈가 존재하지 않습니다";

    public NoSuchIssueException() {
        super(NO_ISSUE);
    }
}

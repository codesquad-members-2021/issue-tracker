package com.codesquad.issuetracker.exception;

public class IssueNotFoundException extends NotFoundException {
    public IssueNotFoundException() {
        super("이슈가 존재하지 않습니다.");
    }
}

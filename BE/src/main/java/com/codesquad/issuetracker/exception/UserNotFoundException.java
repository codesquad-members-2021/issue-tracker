package com.codesquad.issuetracker.exception;

public class UserNotFoundException extends NotFoundException {
    public UserNotFoundException() {
        super("유저가 존재하지 않습니다.");
    }
}

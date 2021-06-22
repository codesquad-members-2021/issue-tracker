package com.codesquad.issuetracker.exception;

public class CommentNotFoundException extends NotFoundException {
    public CommentNotFoundException() {
        super("comment가 존재하지 않습니다.");
    }
}

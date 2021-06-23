package com.team11.issue.exception;

public class CommentNotFoundException extends RuntimeException {

    public CommentNotFoundException() {
        super("해당하는 코멘트를 찾을 수 없습니다.");
    }

    public CommentNotFoundException(String message) {
        super(message);
    }
}

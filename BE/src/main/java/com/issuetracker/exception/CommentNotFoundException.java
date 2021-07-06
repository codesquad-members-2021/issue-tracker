package com.issuetracker.exception;

public class CommentNotFoundException extends ElementNotFoundException {

    public CommentNotFoundException() {
        super("Can not find comment");
    }
}

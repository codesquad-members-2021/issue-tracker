package com.issuetracker.exception;

public class UserNotFoundException extends ElementNotFoundException {

    public UserNotFoundException() {
        super("Cannot find user by given id.");
    }

    public UserNotFoundException(String message) {
        super(message);
    }
}

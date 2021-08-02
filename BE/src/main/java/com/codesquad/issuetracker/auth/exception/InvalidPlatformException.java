package com.codesquad.issuetracker.auth.exception;

public class InvalidPlatformException extends RuntimeException {

    public InvalidPlatformException(String message) {
        super(message);
    }

    public InvalidPlatformException(String message, Throwable cause) {
        super(message, cause);
    }
}

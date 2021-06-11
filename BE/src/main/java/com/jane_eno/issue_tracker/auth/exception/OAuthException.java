package com.jane_eno.issue_tracker.auth.exception;

public class OAuthException extends RuntimeException {
    public OAuthException(String message) {
        super(message);
    }
}

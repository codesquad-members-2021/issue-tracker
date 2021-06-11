package com.jane_eno.issue_tracker.auth.exception;

public class HttpProtocolViolationException extends OAuthException {
    public HttpProtocolViolationException() {
        super("Incorrectly formed response headers.");
    }
}

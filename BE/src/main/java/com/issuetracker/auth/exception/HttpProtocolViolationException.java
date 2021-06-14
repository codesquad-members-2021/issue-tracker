package com.issuetracker.auth.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class HttpProtocolViolationException extends OAuthException {

    public HttpProtocolViolationException() {
        super("Incorrectly formed response headers.");
    }
}

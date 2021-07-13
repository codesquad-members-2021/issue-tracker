package com.issuetracker.auth.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UnknownUserAgentException extends OAuthException {

    public UnknownUserAgentException() {
        super("Unknown User-Agent detected.");
    }
}

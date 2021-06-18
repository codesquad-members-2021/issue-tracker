package com.issuetracker.auth.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UnknownHostException extends OAuthException {

    public UnknownHostException() {
        super("Unknown host detected.");
    }
}

package com.issuetracker.auth.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class AccessTokenNotFoundException extends OAuthException {

    public AccessTokenNotFoundException() {
        super("Access token not found.");
    }
}

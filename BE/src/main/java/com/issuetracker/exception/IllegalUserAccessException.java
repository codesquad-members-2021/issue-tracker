package com.issuetracker.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class IllegalUserAccessException extends RuntimeException {

    public IllegalUserAccessException() {
        super("Illegal user access.");
    }
}

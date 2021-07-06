package com.issuetracker.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InputStreamFormationException extends RuntimeException {

    public InputStreamFormationException() {
        super("Temporary store fails.");
    }
}

package com.jane_eno.issue_tracker.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class EntityNotFoundException extends RuntimeException {

    public EntityNotFoundException() {
        super("Entity not found.");
    }
}

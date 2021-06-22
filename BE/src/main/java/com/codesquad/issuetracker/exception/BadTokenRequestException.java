package com.codesquad.issuetracker.exception;

import org.springframework.http.HttpStatus;

public class BadTokenRequestException extends HttpException {
    public BadTokenRequestException(String message) {
        super(HttpStatus.BAD_REQUEST, message);
    }
}

package com.codesquad.issuetracker.exception;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(TokenEmptyException.class)
    public String handleTokenEmpty(TokenEmptyException e) {
        return e.getMessage();
    }

    @ExceptionHandler(NoSuchIssueException.class)
    public String handleTokenEmpty(NoSuchIssueException e) {
        return e.getMessage();
    }
}

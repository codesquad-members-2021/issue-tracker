package com.codesquad.issuetracker.common.controller;

import com.codesquad.issuetracker.common.dto.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolationException;

@RestControllerAdvice
public class CommonExceptionHandler {
    @ExceptionHandler(BindException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse BindExceptionHandler(BindException bindException) {
        return ErrorResponse.of(HttpStatus.BAD_REQUEST, bindException.getFieldErrors());
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ErrorResponse handle(ConstraintViolationException constraintViolationException) {
        return ErrorResponse.of(HttpStatus.BAD_REQUEST, constraintViolationException.getConstraintViolations());
    }
}

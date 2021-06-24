package com.issuetracker.exception;

import com.amazonaws.SdkClientException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public void defaultExceptionHandler(Exception e) {
        logger.error(e.toString());
    }

    @ExceptionHandler(SdkClientException.class)
    public void handleSdkClientException(SdkClientException e) {
        logger.error(e.toString());
    }
}

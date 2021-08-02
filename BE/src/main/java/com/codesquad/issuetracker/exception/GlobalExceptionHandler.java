package com.codesquad.issuetracker.exception;

import com.codesquad.issuetracker.auth.exception.TokenEmptyException;
import com.codesquad.issuetracker.s3.exception.ImageUploadException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
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

    @ExceptionHandler(ImageUploadException.class)
    public ResponseEntity handleImageUploadException(ImageUploadException e) {
        log.debug("ImageUploadException occurred!! : {} ", e.getMessage());
        return new ResponseEntity(e, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NotAuthorizedUserException.class)
    public ResponseEntity handleNotAuthorizedUserException(NotAuthorizedUserException e) {
        log.debug("NotAuthorizedUserException occurred!! : {} ", e.getMessage());
        return new ResponseEntity(e, HttpStatus.UNAUTHORIZED);
    }
}

package com.codesquad.issuetracker.exception;

import com.codesquad.issuetracker.exception.dto.HttpExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class HttpExceptionHandler {

    @ExceptionHandler(HttpException.class)
    public ResponseEntity<HttpExceptionResponse> handle(HttpException httpException) {
        return new ResponseEntity<HttpExceptionResponse>(
                HttpExceptionResponse.of(httpException.getMessage()),
                httpException.getHttpStatus()
        );
    }

    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public HttpExceptionResponse handleIllegalArgumentException(IllegalArgumentException illegalArgumentException){
        return HttpExceptionResponse.of(illegalArgumentException.getMessage());
    }
}

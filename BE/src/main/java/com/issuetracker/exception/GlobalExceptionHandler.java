package com.issuetracker.exception;

import com.issuetracker.web.dto.response.IssuesResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

//    @ExceptionHandler(InvalidSearchRequestException.class)
//    public ResponseEntity handleInvalidSearchRequestException(InvalidSearchRequestException e) {
//        return ResponseEntity.ok(new IssuesResponseDTO());
//    }
}

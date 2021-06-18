package com.codesqaude.cocomarco.common.exception;

import com.codesqaude.cocomarco.common.exception.notfound.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<ErrorReason> auth(BusinessException e) {
        ErrorCode errorCode = e.getErrorCode();
        ErrorReason errorReason = ErrorReason.of(errorCode);
        return new ResponseEntity<>(errorReason, HttpStatus.valueOf(errorCode.getHttpStatus()));
    }

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ErrorReason> notFound(NotFoundException e) {
        ErrorCode errorCode = e.getErrorCode();
        ErrorReason errorReason = ErrorReason.of(errorCode);
        return new ResponseEntity<>(errorReason, HttpStatus.valueOf(errorCode.getHttpStatus()));
    }

    @ExceptionHandler(Exception.class)
    protected ResponseEntity<ErrorReason> UncontrolledException(Exception e) {
        ErrorReason errorReason = ErrorReason.of(ErrorCode.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(errorReason, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}

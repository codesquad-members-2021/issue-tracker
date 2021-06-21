package com.codesqaude.cocomarco.common.exception;

import com.codesqaude.cocomarco.common.exception.notfound.NotFoundException;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {


    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<ErrorReason> business(BusinessException e) {
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

    @ExceptionHandler(ExpiredJwtException.class)
    public ResponseEntity<ErrorReason> timeOver(ExpiredJwtException e) {
        ErrorReason errorReason = ErrorReason.of(ErrorCode.JWT_TIME_OVER);
        return new ResponseEntity<>(errorReason, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(Exception.class)
    protected ResponseEntity<ErrorReason> uncontrolledException(Exception e) {
        e.printStackTrace();
        ErrorReason errorReason = ErrorReason.of(ErrorCode.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(errorReason, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}

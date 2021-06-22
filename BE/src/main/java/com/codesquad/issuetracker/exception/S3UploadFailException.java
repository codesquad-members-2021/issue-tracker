package com.codesquad.issuetracker.exception;

import org.springframework.http.HttpStatus;

public class S3UploadFailException extends HttpException {
    public S3UploadFailException(String message, Throwable cause) {
        super(HttpStatus.INTERNAL_SERVER_ERROR, message, cause);
    }
}

package com.codesquad.issuetracker.file.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class MultipartFileNotFoundException extends RuntimeException {
    private static final String DEFAULT_MESSAGE = "전송된 파일이 없습니다.";

    public MultipartFileNotFoundException() {
        super(DEFAULT_MESSAGE);
    }
}

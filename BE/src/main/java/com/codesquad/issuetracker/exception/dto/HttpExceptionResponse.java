package com.codesquad.issuetracker.exception.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class HttpExceptionResponse {
    private final String message;

    public static HttpExceptionResponse of(String message) {
        return new HttpExceptionResponse(message);
    }
}

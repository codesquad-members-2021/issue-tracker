package com.codesqaude.cocomarco.common.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ErrorReason {

    private String message;

    public static ErrorReason of(ErrorCode errorCode) {
        return new ErrorReason(errorCode.getMessage());
    }
}

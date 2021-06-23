package com.team11.issue.exception;

public class LabelNotFoundException extends RuntimeException {

    public LabelNotFoundException() {
        super("해당하는 라벨을 찾을 수 없습니다.");
    }

    public LabelNotFoundException(String message) {
        super(message);
    }
}

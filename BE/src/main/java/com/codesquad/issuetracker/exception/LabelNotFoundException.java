package com.codesquad.issuetracker.exception;

public class LabelNotFoundException extends NotFoundException {
    public LabelNotFoundException() {
        super("라벨이 존재하지 않습니다.");
    }
}

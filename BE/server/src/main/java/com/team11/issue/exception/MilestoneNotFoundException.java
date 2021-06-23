package com.team11.issue.exception;

public class MilestoneNotFoundException extends RuntimeException {

    public MilestoneNotFoundException() {
        super("해당하는 마일스톤을 찾을 수 없습니다.");
    }

    public MilestoneNotFoundException(String message) {
        super(message);
    }
}

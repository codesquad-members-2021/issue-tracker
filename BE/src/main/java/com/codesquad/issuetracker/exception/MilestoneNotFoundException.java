package com.codesquad.issuetracker.exception;

public class MilestoneNotFoundException extends NotFoundException {
    public MilestoneNotFoundException() {
        super("마일스톤이 존재하지 않습니다.");
    }
}

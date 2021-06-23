package com.team11.issue.exception;

public class AssigneeillegalException extends RuntimeException {

    public AssigneeillegalException() {
        super("로그인한 유저는 이슈 수정/삭제 권한이 없습니다.");
    }

    public AssigneeillegalException(String message) {
        super(message);
    }
}

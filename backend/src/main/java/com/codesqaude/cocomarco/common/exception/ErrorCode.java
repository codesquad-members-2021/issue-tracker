package com.codesqaude.cocomarco.common.exception;

import lombok.Getter;

@Getter
public enum ErrorCode {

    /**
     * NOT FOUND
     */
    NOT_FOUND_COMMENT(404, "찾는 코멘트가 없습니다."),
    NOT_FOUND_ISSUE(404, "찾는 이슈가 없습니다."),
    NOT_FOUND_MILESTONE(404, "찾는 코멘트가 없습니다."),
    NOT_FOUND_USER(404, "찾는 유저가 없습니다."),
    NOT_FOUND_LABEL(404, "찾는 라벨이 없습니다."),

    /**
     * AUTH EXCEPTION
     */
    NO_PERMISSION_USER(403, "해당 권한이 없습니다."),
    NOT_LOGGED_IN(401, "로그인 되어있지 않습니다."),

    /**
     * JWT 시간 오류
     */
    JWT_TIME_OVER(401, "JWT 시간 만료"),


    INTERNAL_SERVER_ERROR(500, "서버에러 입니다.");

    private int httpStatus;
    private String message;

    ErrorCode(int httpStatus, String message) {
        this.httpStatus = httpStatus;
        this.message = message;
    }
}

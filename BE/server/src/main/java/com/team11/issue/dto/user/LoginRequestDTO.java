package com.team11.issue.dto.user;

public class LoginRequestDTO {

    private String type;
    private String code;

    public LoginRequestDTO(String type, String code) {
        this.type = type;
        this.code = code;
    }

    public String getType() {
        return type;
    }

    public String getCode() {
        return code;
    }
}

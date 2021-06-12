package com.team11.issue.dto.user;

import lombok.Getter;

@Getter
public class LoginRequestDTO {

    private String type;
    private String code;

    public LoginRequestDTO(String type, String code) {
        this.type = type;
        this.code = code;
    }
}

package com.codesquad.issuetracker.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserResponse {

    private String name;

    @JsonProperty("login_id")
    private String loginId;

    public UserResponse(String name, String loginId) {
        this.name = name;
        this.loginId = loginId;
    }

    public String getName() {
        return name;
    }

    public String getloginId() {
        return loginId;
    }
}

package com.codesquad.issuetracker.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserResponse {

    private String name;

    @JsonProperty("user_id")
    private String userId;

    public UserResponse(String name, String userId) {
        this.name = name;
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public String getUserId() {
        return userId;
    }
}

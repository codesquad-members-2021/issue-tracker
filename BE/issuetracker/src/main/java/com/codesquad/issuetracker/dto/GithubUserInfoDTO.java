package com.codesquad.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GithubUserInfoDTO implements UserInfo{

    @JsonProperty("email")
    private String email;

    @JsonProperty("avatar_url")
    private String avatarUrl;

    @JsonProperty("name")
    private String name;

    public String getEmail() {
        return email;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public String getName() {
        return name;
    }
}

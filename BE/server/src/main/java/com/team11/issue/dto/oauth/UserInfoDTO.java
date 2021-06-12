package com.team11.issue.dto.oauth;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class UserInfoDTO {

    @JsonProperty("login")
    private String name;

    @JsonProperty("avatar_url")
    private String profileImage;

    private String email;

    public String getName() {
        return name;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public String getEmail() {
        return email;
    }

}

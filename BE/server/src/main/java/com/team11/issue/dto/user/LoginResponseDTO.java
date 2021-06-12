package com.team11.issue.dto.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.team11.issue.domain.User;

@JsonPropertyOrder({"userId","userName","email","profileImage","jwtToken"})
public class LoginResponseDTO {

    @JsonProperty("userId")
    private final Long id;

    @JsonProperty("userName")
    private final String name;

    private final String email;

    private final String profileImage;

    private final String jwtToken;

    public LoginResponseDTO(User user, String jwtToken) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.profileImage = user.getProfileImage();
        this.jwtToken = jwtToken;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public String getJwtToken() {
        return jwtToken;
    }
}

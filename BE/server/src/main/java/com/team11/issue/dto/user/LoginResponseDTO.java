package com.team11.issue.dto.user;

import com.fasterxml.jackson.annotation.JsonProperty;

/*TODO: 생성자 구현되면 final 로 변경*/
public class LoginResponseDTO {

    @JsonProperty("userId")
    private Long id;

    @JsonProperty("userName")
    private String name;

    private String email;

    private String profileImage;

    private String jwtToken;

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

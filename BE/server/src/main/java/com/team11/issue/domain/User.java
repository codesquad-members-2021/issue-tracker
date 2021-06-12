package com.team11.issue.domain;

import com.team11.issue.dto.oauth.UserInfoDTO;
import org.springframework.data.annotation.Id;


public class User {

    @Id
    private Long id;
    private String name;
    private String email;
    private String profileImage;
    private String accessToken;

    public User() {

    }

    public User(UserInfoDTO userInfoDTO, String accessToken) {
        this.id = id;
        this.name = userInfoDTO.getName();
        this.email = userInfoDTO.getEmail();
        this.profileImage = userInfoDTO.getProfileImage();
        this.accessToken = accessToken;
    }

    public void updateUser(String accessToken) {
        this.accessToken = accessToken;
    }

    public void removeAccessToken() {
        this.accessToken = null;
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

    public String getAccessToken() {
        return accessToken;
    }
}

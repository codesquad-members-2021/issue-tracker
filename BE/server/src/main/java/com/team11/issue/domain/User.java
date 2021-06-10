package com.team11.issue.domain;

import org.springframework.data.annotation.Id;

public class User {

    @Id
    private Long id;
    private String name;
    private String email;
    private String profileImage;
    private String accessToken;


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

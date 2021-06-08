package com.jane_eno.issue_tracker.web.dto.response;

public class UserResponseDTO {

    private final String name;
    private final String email;
    private final String userName;
    private final String token;

    public UserResponseDTO(String name, String email, String userName, String token) {
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.token = token;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getUserName() {
        return userName;
    }

    public String getToken() {
        return token;
    }
}

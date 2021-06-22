package com.issuetracker.oauth;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserDto {
    @JsonProperty("user_id")
    private Long id;

    @JsonProperty("name")
    private String login;

    private String avatar_url;

    public UserDto() {
    }

    public UserDto(String login, Long id, String avatar_url) {
        this.login = login;
        this.id = id;
        this.avatar_url = avatar_url;
    }

    public UserDto(User user) {
        this.login = user.getLogin();
        this.id = user.getId();
        this.avatar_url = user.getAvatar_url();
    }

    public static UserDto of(User user) {
        return new UserDto(user);
    }

    public String getLogin() {
        return login;
    }

    public Long getId() {
        return id;
    }

    public String getAvatar_url() {
        return avatar_url;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public void setAvatar_url(String avatar_url) {
        this.avatar_url = avatar_url;
    }

    @Override
    public String toString() {
        return "User{" +
                "login='" + login + '\'' +
                ", id=" + id +
                ", avatar_url='" + avatar_url + '\'' +
                '}';
    }
}

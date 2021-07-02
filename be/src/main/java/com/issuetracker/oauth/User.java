package com.issuetracker.oauth;

public class User {
    private Long id;

    private String login;

    private String avatar_url;

    public User() {
    }

    public User(String login, Long id, String avatar_url) {
        this.login = login;
        this.id = id;
        this.avatar_url = avatar_url;
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

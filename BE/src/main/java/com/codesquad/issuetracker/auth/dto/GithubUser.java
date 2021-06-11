package com.codesquad.issuetracker.auth.dto;

public class GithubUser {

    private String login;

    public GithubUser() {
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }
}

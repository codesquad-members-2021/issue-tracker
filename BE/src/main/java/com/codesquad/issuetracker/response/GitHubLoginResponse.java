package com.codesquad.issuetracker.response;

import com.codesquad.issuetracker.domain.User;

public class GitHubLoginResponse {

    private String jwt;
    private User user;
    private String type;

    public GitHubLoginResponse(String jwt, User user, String type) {
        this.jwt = jwt;
        this.user = user;
        this.type = type;
    }

    public String getJwt() {
        return jwt;
    }

    public User getUser() {
        return user;
    }

    public String getType() {
        return type;
    }

    public static GitHubLoginResponse create(String jwt, User user, String type) {
        return new GitHubLoginResponse(jwt, user, type);
    }
}

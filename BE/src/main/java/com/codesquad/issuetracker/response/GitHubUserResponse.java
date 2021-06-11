package com.codesquad.issuetracker.response;

import com.codesquad.issuetracker.domain.User;

public class GitHubUserResponse {

    private String jwt;
    private User user;
    private String type;

    public GitHubUserResponse(String jwt, User user, String type) {
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

    public static GitHubUserResponse create(String jwt, User user, String type) {
        return new GitHubUserResponse(jwt, user, type);
    }
}

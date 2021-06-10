package com.codesquad.issuetracker.response;

import com.codesquad.issuetracker.domain.User;

public class GitHubLoginResponse {

    private String jwt;
    private User user;

    public GitHubLoginResponse(String jwt, User user) {
        this.jwt = jwt;
        this.user = user;
    }

    public String getJwt() {
        return jwt;
    }

    public User getUser() {
        return user;
    }

    public static GitHubLoginResponse create(String jwt, User user) {
        return new GitHubLoginResponse(jwt, user);
    }
}

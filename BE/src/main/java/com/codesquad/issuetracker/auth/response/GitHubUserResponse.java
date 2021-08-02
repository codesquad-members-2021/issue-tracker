package com.codesquad.issuetracker.auth.response;

import com.codesquad.issuetracker.domain.user.User;
import com.codesquad.issuetracker.domain.user.response.UserResponse;

public class GitHubUserResponse {

    private String jwt;
    private UserResponse user;
    private String type;

    public GitHubUserResponse(String jwt, UserResponse user, String type) {
        this.jwt = jwt;
        this.user = user;
        this.type = type;
    }

    public static GitHubUserResponse create(String jwt, User user, String type) {
        return new GitHubUserResponse(jwt, UserResponse.create(user), type);
    }

    public String getJwt() {
        return jwt;
    }

    public UserResponse getUser() {
        return user;
    }

    public String getType() {
        return type;
    }
}

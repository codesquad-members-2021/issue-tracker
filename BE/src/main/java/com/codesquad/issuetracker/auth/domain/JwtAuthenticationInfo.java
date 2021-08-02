package com.codesquad.issuetracker.auth.domain;

import lombok.Getter;

@Getter
public class JwtAuthenticationInfo {

    private GitHubUser user;
    private String tokenType;

    private JwtAuthenticationInfo(GitHubUser user, String tokenType) {
        this.user = user;
        this.tokenType = tokenType;
    }

    public static JwtAuthenticationInfo create(GitHubUser user, String tokenType) {
        return new JwtAuthenticationInfo(user, tokenType);
    }
}

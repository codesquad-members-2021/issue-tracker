package com.codesqaude.cocomarco.domain.oauth;

import lombok.Getter;

@Getter
public enum GitOauthUri {
    ACCESS_TOKEN_URI("https://github.com/login/oauth/access_token"),
    USER_INFO_URI("https://api.github.com/user");

    private String uri;

    GitOauthUri(String uri) {
        this.uri = uri;
    }
}

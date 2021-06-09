package com.issuetracker.oauth;

import com.fasterxml.jackson.annotation.JsonSetter;

public class GithubAccessTokenResponseDto {
    private String accessToken;
    private String tokenType;
    private String scope;

    public GithubAccessTokenResponseDto() {
    }

    public String getAccessToken() {
        return accessToken;
    }

    @JsonSetter("access_token")
    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    @JsonSetter("token_type")
    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public String getScope() {
        return scope;
    }

    @JsonSetter("scope")
    public void setScope(String scope) {
        this.scope = scope;
    }

    @Override
    public String toString() {
        return "GithubAccessTokenResponseDto{" +
                "accessToken='" + accessToken + '\'' +
                ", tokenType='" + tokenType + '\'' +
                ", scope='" + scope + '\'' +
                '}';
    }
}

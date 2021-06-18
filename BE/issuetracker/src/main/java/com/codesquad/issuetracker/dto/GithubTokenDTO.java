package com.codesquad.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GithubTokenDTO {

    @JsonProperty("access_token")
    private String accessToken;

    @JsonProperty("scope")
    private String scope;

    @JsonProperty("token_type")
    private String tokenType;

    public String getAccessToken() {
        return "token " + accessToken;
    }

    public String getScope() {
        return scope;
    }

    public String getTokenType() {
        return "token " + tokenType;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }
}

package com.team11.issue.dto.oauth;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccessTokenDTO {

    @JsonProperty("access_token")
    private String accessToken;

    @JsonProperty("token_type")
    private String tokenType;

    private String scope;

    public String getAccessToken() {
        return accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public String getScope() {
        return scope;
    }

}

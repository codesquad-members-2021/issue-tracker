package com.codesquad.issuetracker.user.dto;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class AccessTokenResponse {
    private String accessToken;
    private String tokenType;
    private String scope;

    @JsonSetter("access_token")
    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    @JsonSetter("token_type")
    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    @JsonSetter("scope")
    public void setScope(String scope) {
        this.scope = scope;
    }
}

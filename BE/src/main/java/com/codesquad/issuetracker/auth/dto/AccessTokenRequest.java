package com.codesquad.issuetracker.auth.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class AccessTokenRequest {

    private final String clientId;
    private final String clientSecret;
    private final String code;
    private final String redirectUri;

    @JsonProperty("client_id")
    public String getClientId() {
        return clientId;
    }

    @JsonProperty("client_secret")
    public String getClientSecret() {
        return clientSecret;
    }


    @JsonProperty("code")
    public String getCode() {
        return code;
    }

    @JsonProperty("redirect_uri")
    public String getRedirectUri() {
        return redirectUri;
    }
}

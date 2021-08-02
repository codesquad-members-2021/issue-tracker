package com.codesquad.issuetracker.auth.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccessTokenRequest {

    @JsonProperty("client_id")
    private final String clientId;

    @JsonProperty("client_secret")
    private final String clientSecret;

    private final String code;

    public AccessTokenRequest(String clientId, String clientSecret, String code) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.code = code;
    }

    public static AccessTokenRequest create(String clientId, String clientSecret, String code) {
        return new AccessTokenRequest(clientId, clientSecret, code);
    }

    public String getClientId() {
        return clientId;
    }

    public String getClientSecret() {
        return clientSecret;
    }

    public String getCode() {
        return code;
    }
}

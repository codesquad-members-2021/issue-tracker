package com.codesquad.issuetracker.auth.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccessTokenRequest {

    @JsonProperty("client_id")
    private final String client_id;

    @JsonProperty("client_secret")
    private final String client_secret;

    private final String code;

    public AccessTokenRequest(String client_id, String client_secret, String code) {
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.code = code;
    }

    public static AccessTokenRequest create(String clientId, String clientSecret, String code) {
        return new AccessTokenRequest(clientId, clientSecret, code);
    }

    public String getClient_id() {
        return client_id;
    }

    public String getClient_secret() {
        return client_secret;
    }

    public String getCode() {
        return code;
    }
}

package com.codesquad.issuetracker.request;

public class AccessTokenRequest {
    private final String clientId;
    private final String clientSecret;
    private final String code;

    private AccessTokenRequest(String clientId, String clientSecret, String code) {
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

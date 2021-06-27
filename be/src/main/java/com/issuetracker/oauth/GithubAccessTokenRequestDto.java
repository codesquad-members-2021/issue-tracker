package com.issuetracker.oauth;

public class GithubAccessTokenRequestDto {
    private String clientId;
    private String clientSecret;
    private String code;
    private String redirectUri;

    public GithubAccessTokenRequestDto(String clientId, String clientSecret, String code, String redirectUri) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.code = code;
        this.redirectUri = redirectUri;
    }

    public GithubAccessTokenRequestDto(String clientId, String clientSecret, String code) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.code = code;
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

    public String getRedirectUri() {
        return redirectUri;
    }

    @Override
    public String toString() {
        return "GithubAccessTokenRequestDto{" +
                "clientId='" + clientId + '\'' +
                ", clientSecret='" + clientSecret + '\'' +
                ", code='" + code + '\'' +
                ", redirectUri='" + redirectUri + '\'' +
                '}';
    }
}

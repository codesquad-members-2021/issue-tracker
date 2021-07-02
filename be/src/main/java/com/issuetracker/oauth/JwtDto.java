package com.issuetracker.oauth;

public class JwtDto {
    private String jwt;

    public JwtDto(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }
}

package com.issuetracker.auth.dto;

import lombok.Setter;

@Setter
public class UserAgent {

    private String userAgent;

    public String getUserAgent() {
        return userAgent.split("/")[0];
    }
}

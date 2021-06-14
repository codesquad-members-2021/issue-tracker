package com.issuetracker.auth.dto;

import lombok.Setter;

@Setter
public class UserAgentDTO {

    private String userAgent;

    public String getUserAgent() {
        return userAgent.split("/")[0];
    }
}

package com.issuetracker.auth.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Setter;

@Setter
public class UserAgentDTO {

    @JsonProperty("User-Agent")
    private String userAgent;

    public String getUserAgent() {
        return userAgent.split("/")[0];
    }
}

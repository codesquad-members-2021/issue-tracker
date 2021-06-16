package com.codesqaude.cocomarco.domain.oauth.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class AccessTokenRequest {

    @JsonProperty("client_id")
    public String clientId;

    @JsonProperty("client_secret")
    public String clientSecret;

    public String code;
}

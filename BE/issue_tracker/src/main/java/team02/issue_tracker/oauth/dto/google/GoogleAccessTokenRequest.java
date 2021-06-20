package team02.issue_tracker.oauth.dto.google;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import team02.issue_tracker.oauth.dto.AccessTokenRequest;

@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class GoogleAccessTokenRequest implements AccessTokenRequest {

    @JsonProperty("client_id")
    private String clientId;

    @JsonProperty("client_secret")
    private String clientSecret;

    @JsonProperty("redirect_uri")
    private String redirectUri;

    private String code;

    @JsonProperty("grant_type")
    private String grantType;

}

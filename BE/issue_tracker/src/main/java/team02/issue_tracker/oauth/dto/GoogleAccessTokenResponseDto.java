package team02.issue_tracker.oauth.dto;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.ToString;

@ToString
public class GoogleAccessTokenResponseDto {

    @JsonSetter("access_token")
    private String accessToken;

    @JsonSetter("expires_in")
    private int expiresIn;

    @JsonSetter("token_type")
    private String tokenType;

    @JsonSetter("setter")
    private String scope;

    @JsonSetter("refresh_token")
    private String refreshToken;

    public String accessToken() {
        return this.accessToken;
    }
}

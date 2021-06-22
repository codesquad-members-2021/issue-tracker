package team02.issue_tracker.oauth.dto.google;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.ToString;
import team02.issue_tracker.oauth.dto.AccessToken;

@ToString
public class GoogleAccessToken implements AccessToken {

    @JsonProperty("access_token")
    private String accessToken;

    @JsonProperty("expires_in")
    private int expiresIn;

    @JsonProperty("token_type")
    private String tokenType;

    @JsonProperty("scope")
    private String scope;

    @JsonProperty("refresh_token")
    private String refreshToken;

    @Override
    public String value() {
        return this.accessToken;
    }

    public String tokenType() {
        return this.tokenType;
    }
}

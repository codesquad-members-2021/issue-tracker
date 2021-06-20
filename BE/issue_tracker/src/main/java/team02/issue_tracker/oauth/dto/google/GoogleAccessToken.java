package team02.issue_tracker.oauth.dto.google;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.ToString;
import team02.issue_tracker.oauth.dto.AccessToken;

@ToString
public class GoogleAccessToken implements team02.issue_tracker.oauth.dto.AccessToken {

    @JsonSetter("access_token")
    private String accessToken;

    @JsonSetter("expires_in")
    private int expiresIn;

    @JsonSetter("token_type")
    private String tokenType;

    @JsonSetter("scope")
    private String scope;

    @JsonSetter("refresh_token")
    private String refreshToken;

    @Override
    public String accessToken() {
        return this.accessToken;
    }

    public String tokenType() {
        return this.tokenType;
    }
}

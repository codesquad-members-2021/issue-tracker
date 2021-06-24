package team02.issue_tracker.oauth.dto.naver;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.ToString;
import team02.issue_tracker.oauth.dto.AccessToken;

@ToString
public class NaverAccessToken implements AccessToken {

    @JsonProperty("access_token")
    private String accessToken;

    @JsonProperty("refresh_token")
    private String refreshToken;

    @JsonProperty("token_type")
    private String tokenType;

    @JsonProperty("expires_in")
    private String expiresIn;

    private String error;

    @JsonProperty("error_description")
    private String errorDescription;

    @Override
    public String value() {
        return this.accessToken;
    }
}

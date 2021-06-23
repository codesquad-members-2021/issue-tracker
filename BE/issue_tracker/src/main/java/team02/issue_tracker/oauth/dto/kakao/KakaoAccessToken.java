package team02.issue_tracker.oauth.dto.kakao;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;
import lombok.ToString;
import team02.issue_tracker.oauth.dto.AccessToken;

@ToString
@Getter
public class KakaoAccessToken implements AccessToken {

    @JsonProperty("token_type")
    private String tokenType;

    @JsonProperty("access_token")
    private String accessToken;

    @JsonProperty("expires_in")
    private String expiresIn;

    @JsonProperty("refresh_token")
    private String refreshToken;

    @JsonProperty("refresh_token_expires_in")
    private String refreshTokenExpiresIn;

    private String scope;

    @Override
    public String value() {
        return this.accessToken;
    }
}

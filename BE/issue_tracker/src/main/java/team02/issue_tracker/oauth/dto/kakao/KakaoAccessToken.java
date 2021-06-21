package team02.issue_tracker.oauth.dto.kakao;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;
import lombok.ToString;
import team02.issue_tracker.oauth.dto.AccessToken;

@ToString
@Getter
public class KakaoAccessToken implements AccessToken {

    @JsonSetter("token_type")
    private String tokenType;

    @JsonSetter("access_token")
    private String accessToken;

    @JsonSetter("expires_in")
    private String expiresIn;

    @JsonSetter("refresh_token")
    private String refreshToken;

    @JsonSetter("refresh_token_expires_in")
    private String refreshTokenExpiresIn;

    private String scope;

    @Override
    public String value() {
        return this.accessToken;
    }
}

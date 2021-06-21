package team02.issue_tracker.oauth.dto.github;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.*;
import team02.issue_tracker.oauth.dto.AccessToken;


@Builder
@ToString @Getter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class GithubAccessToken implements AccessToken {

    @JsonSetter("access_token")
    private String accessToken;

    @JsonSetter("scope")
    private String scope;

    @JsonSetter("token_type")
    private String tokenType;

    @Override
    public String value() {
        return this.accessToken;
    }

    @JsonProperty("access_token")
    public String getAccessToken() {
        return this.accessToken;
    }

    @JsonProperty("token_type")
    public String getTokenType() {
        return this.tokenType;
    }
}

package team02.issue_tracker.oauth.dto;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.*;


@Builder
@ToString @Getter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class GithubAccessTokenResponseDto {

    @JsonSetter("access_token")
    private String accessToken;

    @JsonSetter("scope")
    private String scope;

    @JsonSetter("token_type")
    private String tokenType;

    public String accessToken() {
        return this.accessToken;
    }
}

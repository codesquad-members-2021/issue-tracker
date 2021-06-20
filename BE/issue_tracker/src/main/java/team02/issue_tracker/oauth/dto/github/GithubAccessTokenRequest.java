package team02.issue_tracker.oauth.dto.github;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import team02.issue_tracker.oauth.dto.AccessTokenRequest;

@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class GithubAccessTokenRequest implements AccessTokenRequest {

    @JsonProperty("client_id")
    private String clientId;

    @JsonProperty("client_secret")
    private String clientSecret;

    @JsonProperty("code")
    private String code;

    @JsonProperty("redirect_uri")
    private String redirectUri;
}

package team02.issue_tracker.oauth.dto.github;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.*;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.dto.SocialLogin;
import team02.issue_tracker.oauth.dto.SocialProfile;

@ToString
@Builder
@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor
public class GithubUserProfile implements SocialProfile {

    private String email;
    private String login;

    @JsonSetter("avatar_url")
    private String avatarUrl;

    @Override
    public User becomeUser() {
        return User.builder()
                .oauthResource(SocialLogin.GITHUB)
                .username(this.login)
                .email(this.email)
                .profileImage(this.avatarUrl)
                .build();
    }

    @JsonProperty("avatar_url")
    public String getAvatarUrl() {
        return this.avatarUrl;
    }
}

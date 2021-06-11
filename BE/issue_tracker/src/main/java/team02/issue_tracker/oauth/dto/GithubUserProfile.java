package team02.issue_tracker.oauth.dto;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;
import lombok.ToString;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.SocialLogin;

@ToString
@Getter
public class GithubUserProfile implements SocialProfile {
    private Long id;
    private String name;
    private String email;

    @JsonSetter("avatar_url")
    private String avatarUrl;

    public User becomeUser() {
        return User.builder()
                .oauthResource(SocialLogin.GITHUB)
                .username(this.name)
                .email(this.email)
                .profileImage(this.avatarUrl)
                .build();
    }
}

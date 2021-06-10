package team02.issue_tracker.oauth.dto;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;
import lombok.ToString;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.oauth.SocialLogin;

@ToString
@Getter
public class GithubUserProfile {
    private Long id;
    private String login;
    private String name;

    @JsonSetter("avatar_url")
    private String avatarUrl;

    private String email;

    public User becomeUser() {
        return User.builder()
                .username(this.name)
                .email(this.email)
                .password(this.id.toString())
                .oauthResource(SocialLogin.GITHUB)
                .profileImage(this.avatarUrl)
                .build();
    }
}

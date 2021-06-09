package team02.issue_tracker.oauth.dto;

import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class GithubUserProfile {
    private Long id;
    private String login;
    private String name;

    @JsonSetter("avatar_url")
    private String avatarUrl;

    private String email;
}

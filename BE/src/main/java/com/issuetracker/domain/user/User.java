package com.issuetracker.domain.user;

import com.issuetracker.auth.dto.AccessTokenResponseDTO;
import com.issuetracker.auth.dto.GitHubUserResponseDTO;
import com.issuetracker.domain.issue.Issue;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@EqualsAndHashCode(of = "id")
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String userName;
    private String avatarUrl;
    private String token;

    @OneToMany(mappedBy = "author")
    private List<Issue> issues;

    public static User createUser(GitHubUserResponseDTO user, AccessTokenResponseDTO token) {
        return User.builder()
                .name(user.getName())
                .email(user.getEmail())
                .userName(user.getLogin())
                .avatarUrl(user.getAvatarUrl())
                .token(token.getAccessToken())
                .build();
    }

    public void update(GitHubUserResponseDTO userInfo, String token) {
        name = userInfo.getName();
        email = userInfo.getEmail();
        userName = userInfo.getLogin();
        avatarUrl = userInfo.getAvatarUrl();
        this.token = token;
    }

    public void removeToken() {
        this.token = null;
    }
}

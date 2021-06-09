package com.jane_eno.issue_tracker.domain.user;

import com.jane_eno.issue_tracker.auth.dto.AccessTokenResponseDTO;
import com.jane_eno.issue_tracker.auth.dto.GitHubUserResponseDTO;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
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
    }

    public void removeToken() {
        this.token = null;
    }
}

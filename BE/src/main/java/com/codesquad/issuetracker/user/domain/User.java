package com.codesquad.issuetracker.user.domain;

import com.codesquad.issuetracker.auth.dto.GitHubUser;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;
import java.util.UUID;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public class User {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)", name = "USER_ID")
    private UUID id;

    @Column(name = "USER_NICK_NAME")
    private String nickName;

    @NonNull
    @Column(name = "USER_IMAGE_URL")
    private String imageUrl;

    @Column(name = "USER_GITHUB_ID")
    private String gitHubId;

    @Column(name = "USER_APPLE_ID")
    private String appleId;

    private User(String nickName, String imageUrl, String gitHubId) {
        this.nickName = nickName;
        this.imageUrl = imageUrl;
        this.gitHubId = gitHubId;
    }

    public static User instanceOf(UUID id, String nickName, String imageUrl, String gitHubId, String appleId) {
        return new User(id, nickName, imageUrl, gitHubId, appleId);
    }

    public static User fromGitHubUser(GitHubUser gitHubUser) {
        return new User(gitHubUser.getName(), gitHubUser.getAvatarUrl(), gitHubUser.getLogin());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id.equals(user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

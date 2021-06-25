package com.codesquad.issuetracker.domain.user;

import com.codesquad.issuetracker.auth.domain.GitHubUser;
import com.codesquad.issuetracker.exception.NotAuthorizedUserException;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user")
@Getter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @JsonProperty("login_id")
    private String loginId;

    private User(String name, String loginId) {
        this.name = name;
        this.loginId = loginId;
    }

    public User(Long id, String name, String loginId) {
        this(name, loginId);
        this.id = id;
    }

    public static User create(Long id, String name, String loginId) {
        return new User(id, name, loginId);
    }

    public static User githubUserToUser(GitHubUser githubUser) {
        return new User(githubUser.getName(), githubUser.getLogin());
    }

    public boolean validateUser(User user) {
        boolean isAuthorizedUser = this.equals(user);
        if (!isAuthorizedUser) {
            throw new NotAuthorizedUserException("Not Authorized User!");
        }
        return isAuthorizedUser;
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

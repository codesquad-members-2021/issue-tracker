package com.codesquad.issuetracker.domain;

import com.codesquad.issuetracker.domain.oauth.GitHubUser;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
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

    private User(Long id, String name, String loginId) {
        this(name, loginId);
        this.id = id;
    }

    public static User create(Long id, String name, String loginId) {
        return new User(id, name, loginId);
    }

    public static User githubUserToUser(GitHubUser githubUser) {
        return new User(githubUser.getName(), githubUser.getLogin());
    }
}

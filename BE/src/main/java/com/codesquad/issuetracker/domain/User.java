package com.codesquad.issuetracker.domain;

import com.codesquad.issuetracker.domain.oauth.GitHubUser;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
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

    public User() {

    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLoginId() {
        return loginId;
    }

    public User create(Long id, String name, String userId) {
        return new User(id, name, userId);
    }

    public static User githubUserToUser(GitHubUser githubUser) {
        return new User(githubUser.getName(), githubUser.getLogin());
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", userId='" + loginId + '\'' +
                '}';
    }
}

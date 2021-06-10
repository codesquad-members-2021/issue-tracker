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

    @JsonProperty("user_id")
    private String userId;

    private User(String name, String userId) {
        this.name = name;
        this.userId = userId;
    }

    private User(Long id, String name, String userId) {
        this(name, userId);
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

    public String getUserId() {
        return userId;
    }

    public User create(Long id, String name, String userId) {
        return new User(id, name, userId);
    }

    public static User githubUserToUser(GitHubUser githubUser) {
        return new User(githubUser.getName(), githubUser.getLogin());
    }
}

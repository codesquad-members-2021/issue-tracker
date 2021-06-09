package com.codesquad.issuetracker.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    private Long id;
    private String name;
    
    @JsonProperty("user_id")
    private String userId;

    private User(Long id, String name, String userId) {
        this.id = id;
        this.name = name;
        this.userId = userId;
    }

    public User() {

    }

    public User create(Long id, String name, String userId) {
        return new User(id, name, userId);
    }
}

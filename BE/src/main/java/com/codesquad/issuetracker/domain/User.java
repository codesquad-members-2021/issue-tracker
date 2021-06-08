package com.codesquad.issuetracker.domain;

import org.springframework.data.annotation.Id;

public class User {

    @Id
    private final Long id;
    private final String name;
    private final String userId;

    private User(Long id, String name, String userId) {
        this.id = id;
        this.name = name;
        this.userId = userId;
    }

    public User create(Long id, String name, String userId) {
        return new User(id, name, userId);
    }
}

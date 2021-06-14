package com.codesquad.issuetracker.domain;

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

    private String email;

    private String imageUrl;

    private String oauthResourceServer;

    public User(String name, String email, String imageUrl, String oauthResourceServer) {
        this.name = name;
        this.email = email;
        this.imageUrl = imageUrl;
        this.oauthResourceServer = oauthResourceServer;
    }

    public User() {

    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getOauthResourceServer() {
        return oauthResourceServer;
    }
}

package com.codesquad.issuetracker.response;

import com.codesquad.issuetracker.domain.User;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;

public class CommentResponse {

    private final Long id;
    private String content;
    @JsonProperty("created_at")
    private final LocalDateTime createdAt;
    private UserResponse author;

    public CommentResponse(Long id, String content, LocalDateTime createdAt, UserResponse author) {
        this.id = id;
        this.content = content;
        this.createdAt = createdAt;
        this.author = author;
    }

    public Long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public UserResponse getAuthor() {
        return author;
    }
}

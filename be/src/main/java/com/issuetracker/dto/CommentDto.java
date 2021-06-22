package com.issuetracker.dto;

import com.issuetracker.domain.Comment;
import com.issuetracker.oauth.UserDto;

import java.time.LocalDateTime;

public class CommentDto {

    private Long id;
    private String description;
    private LocalDateTime createdTime;
    private UserDto author;

    public CommentDto(Comment comment, UserDto author) {
        this.id = comment.getId();
        this.description = comment.getDescription();
        this.createdTime = comment.getCreatedTime();
        this.author = author;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(LocalDateTime createdTime) {
        this.createdTime = createdTime;
    }

    public UserDto getAuthor() {
        return author;
    }

    public void setAuthor(UserDto author) {
        this.author = author;
    }
}

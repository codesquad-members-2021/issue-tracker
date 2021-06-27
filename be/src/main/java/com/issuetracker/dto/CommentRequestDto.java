package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDate;

public class CommentRequestDto {
    private String description;

    public CommentRequestDto() {
    }

    public CommentRequestDto(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

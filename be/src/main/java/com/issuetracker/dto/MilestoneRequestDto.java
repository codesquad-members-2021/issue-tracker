package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDate;

public class MilestoneRequestDto {
    private String title;
    private String description;

    @JsonProperty("due_date")
    private LocalDate dueDate;

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }
}

package com.codesquad.issuetracker.response;

import com.codesquad.issuetracker.domain.Milestone;
import com.codesquad.issuetracker.domain.Label;
import com.codesquad.issuetracker.domain.User;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;
import java.util.Set;

public class IssueResponse {

    private final Long id;
    private final String title;
    private final String content;
    private final boolean status;

    @JsonProperty("created_at")
    private final LocalDateTime createdAt;

    @JsonProperty("label_list")
    private final Set<LabelResponse> labelList;

    private final UserResponse author;

    private final MilestoneForIssueResponse milestone;

    public IssueResponse(Long id, String title, String content, boolean status, LocalDateTime createdAt,
                         Set<LabelResponse> labelList, UserResponse author, MilestoneForIssueResponse milestone) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.status = status;
        this.createdAt = createdAt;
        this.labelList = labelList;
        this.author = author;
        this.milestone = milestone;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public boolean isStatus() {
        return status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public Set<LabelResponse> getLabelList() {
        return labelList;
    }

    public UserResponse getAuthor() {
        return author;
    }

    public MilestoneForIssueResponse getMilestone() {
        return milestone;
    }
}


package com.codesquad.issuetracker.request;

import com.codesquad.issuetracker.domain.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;
import java.util.ArrayList;

public class IssueRequest {

    private String title;

    private String content;

    @JsonProperty("created_at")
    @JsonFormat(pattern = "yyyy-MM-dd kk:mm:ss")
    private LocalDateTime createdAt;

    private ArrayList<String> label;

    @JsonProperty("milestone_id")
    private Long milestoneId;

    @JsonProperty("user_id")
    private User userId;

    public IssueRequest() {

    }

    public IssueRequest(String title, String content, LocalDateTime createdAt, ArrayList<String> label, Long milestoneId, User userId) {
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.label = label;
        this.milestoneId = milestoneId;
        this.userId = userId;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public ArrayList<String> getLabel() {
        return label;
    }

    public Long getMilestoneId() {
        return milestoneId;
    }

    public User getUserId() {
        return userId;
    }

    @Override
    public String toString() {
        return "IssueRequest{" +
                "title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", createdAt=" + createdAt +
                ", label=" + label +
                ", milestoneId=" + milestoneId +
                ", userId=" + userId +
                '}';
    }
}

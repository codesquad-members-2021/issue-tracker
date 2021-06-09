package com.codesquad.issuetracker.request;

import java.time.LocalDate;
import java.util.ArrayList;

public class IssueRequest {

    private String title;
    private String content;
    private LocalDate createdAt;
    private ArrayList<String> label;
    private Long milestoneId;
    private String userId;

    public IssueRequest(String title, String content, LocalDate createdAt, ArrayList<String> label, Long milestoneId, String userId) {
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

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public ArrayList<String> getLabel() {
        return label;
    }

    public Long getMilestoneId() {
        return milestoneId;
    }

    public String getUserId() {
        return userId;
    }
}

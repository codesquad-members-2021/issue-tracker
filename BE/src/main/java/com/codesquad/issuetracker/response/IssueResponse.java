package com.codesquad.issuetracker.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;
import java.util.Set;

public class IssueResponse {

    private final Long id;
    private final String title;
    private final String content;
    private final boolean status;

    @JsonProperty("created_at")
    @JsonFormat(pattern = "yyyy-MM-dd kk:mm:ss")
    private final LocalDateTime createdAt;

    private final UserResponse author;

    private final MilestoneForIssueResponse milestone;

    @JsonProperty("label_list")
    private final Set<LabelResponse> labelList;

    private Set<AssigneeForIssueResponse> assigneeList;

    public IssueResponse(Long id, String title, String content, boolean status, LocalDateTime createdAt,
                         UserResponse author, MilestoneForIssueResponse milestone,
                         Set<LabelResponse> labelList, Set<AssigneeForIssueResponse> assigneeList) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.status = status;
        this.createdAt = createdAt;
        this.author = author;
        this.milestone = milestone;
        this.labelList = labelList;
        this.assigneeList = assigneeList;
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

    public Set<AssigneeForIssueResponse> getAssigneeList() {
        return assigneeList;
    }
}


package com.codesquad.issuetracker.request;

import com.codesquad.issuetracker.domain.Label;
import com.codesquad.issuetracker.domain.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;
import java.util.ArrayList;

public class IssueRequest {

    private String title;
    private String content;
    private boolean status;

    @JsonProperty("created_at")
    @JsonFormat(pattern = "yyyy-MM-dd kk:mm:ss")
    private LocalDateTime createdAt;

    @JsonProperty("user_id")
    private User user;

    @JsonProperty("milestone_id")
    private Long milestoneId;

    @JsonProperty("label_list")
    private ArrayList<Label> labelList;

    @JsonProperty("assignee_list")
    private ArrayList<AssigneeRequest> assigneeList;

    public IssueRequest() {

    }

    public IssueRequest(String title, String content, boolean status, LocalDateTime createdAt,
                        User user, Long milestoneId, ArrayList<Label> labelList, ArrayList<AssigneeRequest> assigneeList) {
        this.title = title;
        this.content = content;
        this.status = status;
        this.createdAt = createdAt;
        this.user = user;
        this.milestoneId = milestoneId;
        this.labelList = labelList;
        this.assigneeList = assigneeList;
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

    public ArrayList<Label> getLabelList() {
        return labelList;
    }

    public Long getMilestoneId() {
        return milestoneId;
    }

    public User getUser() {
        return user;
    }

    public ArrayList<AssigneeRequest> getAssigneeList() {
        return assigneeList;
    }

    @Override
    public String toString() {
        return "IssueRequest{" +
                "title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", status=" + status +
                ", createdAt=" + createdAt +
                ", user=" + user +
                ", milestoneId=" + milestoneId +
                ", labelList=" + labelList +
                ", assigneeList=" + assigneeList +
                '}';
    }
}

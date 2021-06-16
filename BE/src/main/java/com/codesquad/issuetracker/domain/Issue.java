package com.codesquad.issuetracker.domain;

import com.codesquad.issuetracker.request.IssueRequest;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;
    private boolean status;

    @JsonProperty("created_at")
    @DateTimeFormat(pattern = "yyyy-MM-dd kk:mm:ss")
    private LocalDateTime createdAt;

    @OneToOne
    private User user;

    @JsonProperty("milestone_id")
    private Long milestoneId;

    @OneToMany(mappedBy = "issue")
    private List<IssueLabel> issueLabels = new ArrayList<>();

    @OneToMany
    // @JoinColumn(name = "issue_id")
    private List<Assignee> assignees = new ArrayList<>();

    public Issue() {
    }

    public Issue(Long id, String title, String content, boolean status, LocalDateTime createdAt, Long milestoneId, User user) {
        this(title, content, status, createdAt, milestoneId, user);
        this.id = id;

    }

    public Issue(String title, String content, boolean status, LocalDateTime createdAt, Long milestoneId, User user) {
        this.title = title;
        this.content = content;
        this.status = status;
        this.createdAt = createdAt;
        this.milestoneId = milestoneId;
        this.user = user;
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

    public Long getMilestoneId() {
        return milestoneId;
    }

    public User getUser() {
        return user;
    }

    public List<IssueLabel> getIssueLabels() {
        return issueLabels;
    }

    public List<Assignee> getAssignees() {
        return assignees;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public void setMilestoneId(Long milestoneId) {
        this.milestoneId = milestoneId;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setIssueLabels(List<IssueLabel> issueLabels) {
        this.issueLabels = issueLabels;
    }

    public void setAssignees(List<Assignee> assignees) {
        this.assignees = assignees;
    }

    public static Issue issueRequestToIssue(IssueRequest issueRequest) {
        return new Issue(issueRequest.getTitle(), issueRequest.getContent(), true, issueRequest.getCreatedAt(),
                issueRequest.getMilestoneId(), issueRequest.getUser());
    }

    @Override
    public String toString() {
        return "Issue{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", status=" + status +
                ", createdAt=" + createdAt +
                ", user=" + user +
                ", milestoneId=" + milestoneId +
                ", issueLabels=" + issueLabels +
                ", assignees=" + assignees +
                '}';
    }
}

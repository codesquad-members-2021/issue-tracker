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

    @JsonProperty("milestone_id")
    private Long milestoneId;

    @OneToOne
    private User user;

    @OneToMany(mappedBy = "issue")
    private List<IssueLabel> issueLabels = new ArrayList<>();

    public Issue() {
    }

    private Issue(Long id, String title, String content, boolean status, LocalDateTime createdAt, Long milestoneId, User user) {
        this(title, content, status, createdAt, milestoneId, user);
        this.id = id;

    }

    private Issue(String title, String content, boolean status, LocalDateTime createdAt, Long milestoneId, User user) {
        this.title = title;
        this.content = content;
        this.status = status;
        this.createdAt = createdAt;
        this.milestoneId = milestoneId;
        this.user = user;
    }

    public Issue create(Long id, String title, String content, boolean status, LocalDateTime createdAt, Long milestoneId, User userId) {
        return new Issue(id, title, content, status, createdAt, milestoneId, userId);
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

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
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

    public static Issue issueRequestToIssue(IssueRequest issueRequest) {
        return new Issue(issueRequest.getTitle(), issueRequest.getContent(), true, issueRequest.getCreatedAt(),
                issueRequest.getMilestoneId(), issueRequest.getUserId());
    }

    @Override
    public String toString() {
        return "Issue{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", status=" + status +
                ", createdAt=" + createdAt +
                ", milestoneId=" + milestoneId +
                ", userId=" + user +
                ", issueLabels=" + issueLabels +
                '}';
    }
}

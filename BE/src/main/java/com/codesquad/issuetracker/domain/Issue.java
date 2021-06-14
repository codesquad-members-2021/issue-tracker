package com.codesquad.issuetracker.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;
    private boolean status;
    private LocalDateTime createdAt;
    private Long milestoneId;
    private Long userId;

    public Issue() {
    }

    private Issue(Long id, String title, String content, boolean status, LocalDateTime createdAt, Long milestoneId, Long userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.status = status;
        this.createdAt = createdAt;
        this.milestoneId = milestoneId;
        this.userId = userId;
    }

    public Issue create(Long id, String title, String content, boolean status, LocalDateTime createdAt, Long milestoneId, Long userId) {
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

    public Long getUserId() {
        return userId;
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
                ", userId=" + userId +
                '}';
    }
}

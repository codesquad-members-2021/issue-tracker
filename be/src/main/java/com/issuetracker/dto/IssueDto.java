package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.issuetracker.domain.Issue;
import com.issuetracker.oauth.User;

import java.time.LocalDateTime;

public class IssueDto {
    private Long id;
    private String title;
    private String description;

    @JsonProperty("author_avatar_url")
    private String authorAvatarUrl;
    //    private List<Label> labelList;

    @JsonProperty("issue_number")
    private Long issueNumber;

    @JsonProperty("created_time")
    private LocalDateTime createdTime;

    @JsonProperty("milestone_title")
    private String milestoneTitle;

    public IssueDto(Long id, String title, String description, String authorAvatarUrl, Long issueNumber, LocalDateTime createdTime, String milestoneTitle) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.authorAvatarUrl = authorAvatarUrl;
        this.issueNumber = issueNumber;
        this.createdTime = createdTime;
        this.milestoneTitle = milestoneTitle;
    }

    public static IssueDto of(Issue issue, User user, String milestoneTitle) {
        return new IssueDto(
                issue.getId(),
                issue.getTitle(),
                issue.getDescription(),
                user.getAvatar_url(),
//                getLabelListByIssueId(issue.getId()),
                issue.getNumber(),
                issue.getCreatedTime(),
                milestoneTitle
        );
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getAuthorAvatarUrl() {
        return authorAvatarUrl;
    }

    public Long getIssueNumber() {
        return issueNumber;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public String getMilestoneTitle() {
        return milestoneTitle;
    }

    @Override
    public String toString() {
        return "IssueDto{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", authorAvatarUrl='" + authorAvatarUrl + '\'' +
                ", issueNumber=" + issueNumber +
                ", createdTime=" + createdTime +
                '}';
    }
}

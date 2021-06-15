package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.issuetracker.domain.Issue;
import com.issuetracker.domain.Label;
import com.issuetracker.oauth.User;

import java.time.LocalDateTime;
import java.util.List;

public class IssueDto {
    private Long id;
    private String title;
    private String description;

    @JsonProperty("author_avatar_url")
    private String authorAvatarUrl;

    @JsonProperty("label_list")
    private List<Label> labelList;

    @JsonProperty("issue_number")
    private Long issueNumber;

    @JsonProperty("created_time")
    private LocalDateTime createdTime;

    @JsonProperty("milestone_title")
    private String milestoneTitle;

    public IssueDto(Long id, String title, String description, String authorAvatarUrl, List<Label> labelList, Long issueNumber, LocalDateTime createdTime, String milestoneTitle) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.authorAvatarUrl = authorAvatarUrl;
        this.labelList = labelList;
        this.issueNumber = issueNumber;
        this.createdTime = createdTime;
        this.milestoneTitle = milestoneTitle;
    }

    public IssueDto(Issue issue, String authorAvatarUrl, String milestoneTitle) {
        this.id = issue.getId();
        this.title = issue.getTitle();
        this.description = issue.getDescription();
        this.authorAvatarUrl = authorAvatarUrl;
        this.issueNumber = issue.getNumber();
        this.createdTime = issue.getCreatedTime();
        this.milestoneTitle = milestoneTitle;
    }

    public static IssueDto of(Issue issue, User user, String milestoneTitle, List<Label> labels) {
        return new IssueDto(
                issue.getId(),
                issue.getTitle(),
                issue.getDescription(),
                user.getAvatar_url(),
                labels,
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

    public List<Label> getLabelList() {
        return labelList;
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

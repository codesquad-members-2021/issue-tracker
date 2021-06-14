package com.issuetracker.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.issuetracker.domain.Issue;
import com.issuetracker.domain.Label;

public class IssueDto {
    private Long id;
    private String title;
    private String description;
    private String authorAvatarUrl;
    private List<Label> labelList;
    private Integer issueNumber;
    private LocalDateTime createdTime;
    private String milestoneTitle;

    public IssueDto(Long id, String title, String description, String authorAvatarUrl, List<Label> labelList, Integer issueNumber, LocalDateTime createdTime, String milestoneTitle) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.authorAvatarUrl = authorAvatarUrl;
        this.labelList = labelList;
        this.issueNumber = issueNumber;
        this.createdTime = createdTime;
        this.milestoneTitle = milestoneTitle;
    }

    public static IssueDto of(Issue issue) {
        return new IssueDto(
                issue.getId(),
                issue.getTitle(),
                issue.getDescription(),
                getAuthorAvatarUrlByUserId(issue.getAuthorUserId()),
                getLabelListByIssueId(issue.getId()),
                issue.getNumber(),
                issue.getCreatedTime(),
                getMilestoneTitleByMilestoneId(issue.getMilestoneId())
        );
    }
}

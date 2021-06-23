package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.issuetracker.domain.Issue;
import com.issuetracker.oauth.User;
import com.issuetracker.oauth.UserDto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class IssueDetailDto {
    private String title;
    private String description;
    private List<UserDto> assignees = new ArrayList<>();

    @JsonProperty("created_time")
    private LocalDateTime createdTime;

    private boolean closed;
    private MilestoneForIssueDetailDto milestone;

    private UserDto author;

    @JsonProperty("issue_number")
    private Long issueNumber;

    @JsonProperty("label_list")
    private List<LabelForIssueDetailDto> labelList;

    @JsonProperty("num_of_comments")
    private Integer numOfComments;

    public IssueDetailDto(String title, String description, UserDto assignees, LocalDateTime createdTime, boolean closed, MilestoneForIssueDetailDto milestone, UserDto author, Long issueNumber, List<LabelForIssueDetailDto> labelList, Integer numOfComments) {
        this.title = title;
        this.description = description;
        this.assignees.add(assignees);
        this.createdTime = createdTime;
        this.closed = closed;
        this.milestone = milestone;
        this.author = author;
        this.issueNumber = issueNumber;
        this.labelList = labelList;
        this.numOfComments = numOfComments;
    }

    public IssueDetailDto(String title, String description, LocalDateTime createdTime, boolean closed, MilestoneForIssueDetailDto milestone, UserDto author, Long issueNumber, List<LabelForIssueDetailDto> labelList, Integer numOfComments) {
        this.title = title;
        this.description = description;
        this.createdTime = createdTime;
        this.closed = closed;
        this.milestone = milestone;
        this.author = author;
        this.issueNumber = issueNumber;
        this.labelList = labelList;
        this.numOfComments = numOfComments;
    }

    public static IssueDetailDto of(Issue issue, UserDto author, UserDto assignee, MilestoneForIssueDetailDto milestone, List<LabelForIssueDetailDto> labelList, Integer numOfComments) {
        return new IssueDetailDto(
                issue.getTitle(),
                issue.getDescription(),
                assignee,
                issue.getCreatedTime(),
                issue.isClosed(),
                milestone,
                author,
                issue.getNumber(),
                labelList,
                numOfComments
        );
    }

    public static IssueDetailDto of(Issue issue, UserDto author, MilestoneForIssueDetailDto milestone, List<LabelForIssueDetailDto> labelList, Integer numOfComments) {
        return new IssueDetailDto(
                issue.getTitle(),
                issue.getDescription(),
                issue.getCreatedTime(),
                issue.isClosed(),
                milestone,
                author,
                issue.getNumber(),
                labelList,
                numOfComments
        );
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public List<UserDto> getAssignees() {
        return assignees;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public boolean isClosed() {
        return closed;
    }

    public MilestoneForIssueDetailDto getMilestone() {
        return milestone;
    }

    public UserDto getAuthor() {
        return author;
    }

    public Long getIssueNumber() {
        return issueNumber;
    }

    public List<LabelForIssueDetailDto> getLabelList() {
        return labelList;
    }

    public Integer getNumOfComments() {
        return numOfComments;
    }
}

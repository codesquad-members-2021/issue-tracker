package com.codesquad.issuetracker.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class MilestoneResponse {

    private final Long id;
    private String title;
    private String content;
    @JsonProperty("due_date")
    private LocalDateTime dueDate;
    @JsonProperty("open_issues")
    private int openedIssue;
    @JsonProperty("close_issues")
    private int closedIssue;
    private int progress;

    public MilestoneResponse(Long id, String title, String content, LocalDateTime dueDate, int openedIssue, int closedIssue, int progress) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.dueDate = dueDate;
        this.openedIssue = openedIssue;
        this.closedIssue = closedIssue;
        this.progress = progress;
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

    public LocalDateTime getDueDate() {
        return dueDate;
    }

    public int getOpenedIssue() {
        return openedIssue;
    }

    public int getClosedIssue() {
        return closedIssue;
    }

    public int getProgress() {
        return progress;
    }
}

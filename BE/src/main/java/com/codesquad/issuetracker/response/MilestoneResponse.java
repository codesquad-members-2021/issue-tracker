package com.codesquad.issuetracker.response;

import com.codesquad.issuetracker.domain.Milestone;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class MilestoneResponse {

    private Long id;

    private String title;

    private String content;

    @JsonProperty("due_date")
    private LocalDateTime dueDate;

    @JsonProperty("open_issues")
    private int openedIssue;

    @JsonProperty("close_issues")
    private int closedIssue;

    private int progress;

    public static MilestoneResponse create(Milestone milestone) {
        int openedIssue = milestone.getOpenedIssue();
        int closedIssue = milestone.getClosedIssue();

        int progress = (openedIssue + closedIssue) == 0 ? 0 : openedIssue / (openedIssue + closedIssue);

        return new MilestoneResponse(
                milestone.getId(),
                milestone.getTitle(),
                milestone.getContent(),
                milestone.getDueDate(),
                milestone.getOpenedIssue(),
                milestone.getClosedIssue(),
                progress
        );
    }


}

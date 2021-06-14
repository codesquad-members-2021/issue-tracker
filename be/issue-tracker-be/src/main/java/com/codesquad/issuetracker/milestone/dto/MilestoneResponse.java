package com.codesquad.issuetracker.milestone.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class MilestoneResponse {
    private Long id;
    private String name;
    private String description;
    private LocalDate dueDate;
    private boolean isClosed;
    private int openedIssueCount;
    private int closedIssueCount;
}

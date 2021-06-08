package com.jane_eno.issue_tracker.web.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Builder
@ToString
@AllArgsConstructor
public class Milestone {

    private final Long id;
    private final String title;
    private final String description;
    private final LocalDateTime createdDateTime;
    private final LocalDate dueDate;
    private final int openedIssues;
    private final int closedIssues;
}

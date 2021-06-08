package com.jane_eno.issue_tracker.web.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
public class Milestone {

    private final Long id;
    private final String title;
    private final String description;
    private final LocalDateTime createdDate;
    private final int openedIssues;
    private final int closedIssues;
}

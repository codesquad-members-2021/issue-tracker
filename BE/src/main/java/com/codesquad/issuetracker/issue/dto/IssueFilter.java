package com.codesquad.issuetracker.issue.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class IssueFilter {
    private UUID author;
    private UUID assignee;
    private String label;
    private String milestone;
    private Boolean open;
}

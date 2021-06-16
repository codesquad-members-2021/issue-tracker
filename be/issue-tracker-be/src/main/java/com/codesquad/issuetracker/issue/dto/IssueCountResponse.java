package com.codesquad.issuetracker.issue.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class IssueCountResponse {
    private int openedIssueCount;
    private int closedIssueCount;
}

package com.codesquad.issuetracker.issue.dto;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class IssueResponses {

    @JsonValue
    private List<IssueResponse> issueResponses;

    private int openedIssueCount;
    private int closedIssueCount;
}

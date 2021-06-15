package com.codesquad.issuetracker.issue.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class IssueResponses {

    @JsonProperty("issues")
    private List<IssueResponse> issueResponses;

    private int openedIssueCount;
    private int closedIssueCount;
}

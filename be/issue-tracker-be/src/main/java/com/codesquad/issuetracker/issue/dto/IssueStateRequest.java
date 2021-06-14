package com.codesquad.issuetracker.issue.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class IssueStateRequest {
    @NotNull
    private Long id;
    private boolean isClosed;
}

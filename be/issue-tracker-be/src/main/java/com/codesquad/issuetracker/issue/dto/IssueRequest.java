package com.codesquad.issuetracker.issue.dto;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Data
public class IssueRequest {
    @NotEmpty
    private String title;

    private String mainCommentContents;

    @NotNull
    private Long authorId;

    private Set<Long> assigneeIds;
    private Set<Long> labelIds;
    private Long milestoneId;
}

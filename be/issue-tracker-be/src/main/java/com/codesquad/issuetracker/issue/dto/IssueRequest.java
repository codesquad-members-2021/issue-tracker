package com.codesquad.issuetracker.issue.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IssueRequest {
    @NotEmpty
    private String title;
    private String mainCommentContents;
    private long authorId;
    private Set<Long> assigneeIds;
    private Set<Long> labelIds;
    private Long milestoneId;
}

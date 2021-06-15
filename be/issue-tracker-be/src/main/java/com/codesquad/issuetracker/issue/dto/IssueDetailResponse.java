package com.codesquad.issuetracker.issue.dto;

import com.codesquad.issuetracker.comment.dto.CommentResponse;
import com.codesquad.issuetracker.comment.dto.CommentResponses;
import com.codesquad.issuetracker.label.dto.LabelResponses;
import com.codesquad.issuetracker.milestone.dto.MilestoneResponse;
import com.codesquad.issuetracker.user.dto.UserResponse;
import com.codesquad.issuetracker.user.dto.UserResponses;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Collection;

@Data
@Builder
public class IssueDetailResponse {
    private Long id;
    private long number;
    private String title;
    private boolean isClosed;
    private LocalDateTime createDateTime;
    private UserResponse author;
    private UserResponses assignees;

    @JsonUnwrapped
    private LabelResponses labels;

    private MilestoneResponse milestone;
    private CommentResponse mainComment;

    @JsonUnwrapped
    private CommentResponses comments;

    public Collection<UserResponse> getAssignees() {
        return assignees.getUserResponses();
    }
}

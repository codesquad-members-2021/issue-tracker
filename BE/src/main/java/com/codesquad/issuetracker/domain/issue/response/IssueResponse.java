package com.codesquad.issuetracker.domain.issue.response;

import com.codesquad.issuetracker.domain.assignee.response.AssigneeForIssueResponse;
import com.codesquad.issuetracker.domain.comment.response.CommentResponse;
import com.codesquad.issuetracker.domain.label.response.LabelResponse;
import com.codesquad.issuetracker.domain.milestone.response.MilestoneForIssueResponse;
import com.codesquad.issuetracker.domain.user.response.UserResponse;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.Set;

@AllArgsConstructor
@Getter
public class IssueResponse {

    private final Long id;
    private final String title;
    private final String content;
    private final boolean status;

    @JsonProperty("created_at")
    @JsonFormat(pattern = "yyyy-MM-dd kk:mm:ss")
    private final LocalDateTime createdAt;

    private final UserResponse author;

    private final MilestoneForIssueResponse milestone;

    @JsonProperty("label_list")
    private Set<LabelResponse> labelList;

    @JsonProperty("assignee_list")
    private Set<AssigneeForIssueResponse> assigneeList;

    @JsonProperty("comment_list")
    private Set<CommentResponse> commentList;
}


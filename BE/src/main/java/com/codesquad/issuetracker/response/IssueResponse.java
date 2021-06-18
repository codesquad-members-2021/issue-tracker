package com.codesquad.issuetracker.response;

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


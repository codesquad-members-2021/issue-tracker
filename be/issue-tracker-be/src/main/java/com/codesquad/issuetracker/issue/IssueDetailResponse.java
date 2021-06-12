package com.codesquad.issuetracker.issue;

import com.codesquad.issuetracker.comment.CommentResponse;
import com.codesquad.issuetracker.comment.CommentResponses;
import com.codesquad.issuetracker.label.LabelResponses;
import com.codesquad.issuetracker.milestone.MileStoneResponse;
import com.codesquad.issuetracker.user.UserResponse;
import com.codesquad.issuetracker.user.UserResponses;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

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
    private LabelResponses labels;
    private MileStoneResponse milestone;
    private CommentResponse mainComment;
    private CommentResponses comments;
}

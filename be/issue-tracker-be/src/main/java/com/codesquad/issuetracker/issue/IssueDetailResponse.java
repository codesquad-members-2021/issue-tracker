package com.codesquad.issuetracker.issue;

import com.codesquad.issuetracker.comment.CommentResponse;
import com.codesquad.issuetracker.label.LabelResponse;
import com.codesquad.issuetracker.milestone.MileStoneResponse;
import com.codesquad.issuetracker.user.UserResponse;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Data
@Builder
public class IssueDetailResponse {
    private Long id;
    private long number;
    private String title;
    private boolean isClosed;
    private LocalDateTime createDateTime;
    private UserResponse author;
    private Set<UserResponse> assignees;
    private List<LabelResponse> labels;
    private MileStoneResponse milestone;
    private CommentResponse mainComment;
    private List<CommentResponse> comments;
}

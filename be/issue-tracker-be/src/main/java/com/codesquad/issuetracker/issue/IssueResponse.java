package com.codesquad.issuetracker.issue;

import com.codesquad.issuetracker.label.LabelResponse;
import com.codesquad.issuetracker.milestone.MileStoneResponse;
import com.codesquad.issuetracker.user.UserResponse;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class IssueResponse {
    private Long id;
    private long number;
    private String title;
    private String description;
    private boolean isClosed;
    private boolean isAuthorSame;
    private LocalDateTime createDateTime;
    private UserResponse author;
    private List<UserResponse> assignees;
    private List<LabelResponse> labels;
    private MileStoneResponse milestone;
}

package com.codesquad.issuetracker.issue;

import com.codesquad.issuetracker.label.LabelResponses;
import com.codesquad.issuetracker.milestone.MileStoneResponse;
import com.codesquad.issuetracker.user.UserResponse;
import com.codesquad.issuetracker.user.UserResponses;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class IssueResponse {
    private Long id;
    private long number;
    private String title;
    private String description;
    private boolean isClosed;
    private boolean hasSameAuthorComments;
    private LocalDateTime createDateTime;
    private UserResponse author;
    private UserResponses assignees;
    private LabelResponses labels;
    private MileStoneResponse milestone;
}

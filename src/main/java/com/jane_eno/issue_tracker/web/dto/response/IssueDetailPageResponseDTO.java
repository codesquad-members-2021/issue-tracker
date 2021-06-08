package com.jane_eno.issue_tracker.web.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class IssueDetailPageResponseDTO {
    private final Long id;
    private final String title;
    private final boolean status;
    private final LocalDateTime createdDateTime;
    private final List<Comment> comments;
    private final List<Assignee> assignees;
    private final List<Label> labels;
    private final List<Milestone> milestones;
}

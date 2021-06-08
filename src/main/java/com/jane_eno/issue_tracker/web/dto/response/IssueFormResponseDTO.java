package com.jane_eno.issue_tracker.web.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class IssueFormResponseDTO {

    private final List<Assignee> assignees;
    private final List<Label> labels;
    private final List<Milestone> milestones;
}

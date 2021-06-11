package com.jane_eno.issue_tracker.web.dto.response;

import com.jane_eno.issue_tracker.domain.milestone.Milestone;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class MilestonesInIssueResponseDTO {

    private final MilestoneDTO milestone;
}

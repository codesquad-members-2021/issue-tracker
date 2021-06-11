package com.jane_eno.issue_tracker.web.dto.response;

import com.jane_eno.issue_tracker.web.dto.response.vo.Assignee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class IssueFormResponseDTO {

    private final List<Assignee> assignees;
    private final List<LabelDTO> labels;
    private final List<MilestoneDTO> milestones;
}

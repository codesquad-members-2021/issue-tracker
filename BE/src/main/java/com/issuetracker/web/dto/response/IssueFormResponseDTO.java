package com.issuetracker.web.dto.response;

import com.issuetracker.web.dto.vo.Assignee;
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

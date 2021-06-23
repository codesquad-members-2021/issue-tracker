package com.team11.issue.dto.milestone;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.team11.issue.domain.Milestone;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;

@JsonPropertyOrder({"milestoneId", "title", "deadLineDate", "description", "issueCount"})
@RequiredArgsConstructor
@Builder
@Getter
public class MilestoneResponseDTO {

    private final Long milestoneId;
    private final String title;
    private final LocalDate deadLineDate;
    private final String description;
    private final IssueCountResponseDTO issueCount;

    public static MilestoneResponseDTO from(Milestone milestone, IssueCountResponseDTO issueCountResponseDTO) {
        return MilestoneResponseDTO.builder()
                .milestoneId(milestone.getId())
                .title(milestone.getTitle())
                .deadLineDate(milestone.getDeadLineDate())
                .description(milestone.getDescription())
                .issueCount(issueCountResponseDTO)
                .build();
    }
}

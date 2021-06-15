package com.issuetracker.web.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import com.issuetracker.domain.milestone.Milestone;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Builder
@ToString
@AllArgsConstructor
public class MilestoneDTO {

    private final Long id;
    private final String title;
    private final String description;
    private final LocalDateTime createdDateTime;
    private final LocalDate dueDate;
    private final Long openedIssueCount;
    private final Long closedIssueCount;

    public static MilestoneDTO of(Milestone milestone) {
        return MilestoneDTO.builder()
                .id(milestone.getId())
                .title(milestone.getTitle())
                .description(milestone.getDescription())
                .createdDateTime(milestone.getCreatedDateTime())
                .dueDate(milestone.getDueDate())
                .openedIssueCount(milestone.countOpenedIssues())
                .closedIssueCount(milestone.countClosedIssues())
                .build();
    }
}

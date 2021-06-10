package com.jane_eno.issue_tracker.web.dto.response;

import com.jane_eno.issue_tracker.domain.issue.Issue;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import com.jane_eno.issue_tracker.domain.milestone.Milestone;
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
    private final int openedIssues;
    private final int closedIssues;

    public static MilestoneDTO of(Milestone milestone) {
        return MilestoneDTO.builder()
                .title(milestone.getTitle())
                .description(milestone.getDescription())
                .createdDateTime(milestone.getCreatedDateTime())
                .dueDate(milestone.getDueDate())
                .openedIssues(Math.toIntExact(milestone.getIssues().stream().filter(Issue::isOpen).count()))
                .closedIssues(Math.toIntExact(milestone.getIssues().stream().filter(i->!i.isOpen()).count()))
                .build();
    }
}

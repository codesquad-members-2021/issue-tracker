package com.jane_eno.issue_tracker.web.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class IssueResponseDTO {

    private final Long id;
    private final String title;
    private final String comment;
    private final String author;
    private final LocalDateTime createdDateTime;
    private final Integer commentNumber;
    private final List<Assignee> assignees;
    private final List<LabelDTO> labels;
    private final String milestone;
}

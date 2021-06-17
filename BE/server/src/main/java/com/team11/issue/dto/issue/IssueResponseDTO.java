package com.team11.issue.dto.issue;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.team11.issue.domain.History;
import com.team11.issue.domain.Issue;
import com.team11.issue.dto.history.HistoryResponseDTO;
import com.team11.issue.dto.label.LabelsResponseDTO;
import com.team11.issue.dto.milestone.IssueCountResponseDTO;
import com.team11.issue.dto.milestone.MilestoneResponseDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@JsonPropertyOrder({"issueId", "history", "isOpen", "title", "contents", "milestone", "labels"})
@RequiredArgsConstructor
@Builder
@Getter
public class IssueResponseDTO {

    private final Long issueId;
    private final HistoryResponseDTO history;
    private final boolean isOpen;
    private final String title;
    private final String contents;
    private final MilestoneResponseDTO milestone;
    private final LabelsResponseDTO labels;

    public static IssueResponseDTO from(Issue issue, History history, IssueCountResponseDTO issueCountResponseDTO, LabelsResponseDTO labelsResponseDTO) {
        return IssueResponseDTO.builder()
                .issueId(issue.getId())
                .history(HistoryResponseDTO.from(history))
                .isOpen(issue.isOpen())
                .title(issue.getTitle())
                .contents(issue.getContents())
                .milestone(MilestoneResponseDTO.from(issue.getMilestone(), issueCountResponseDTO))
                .labels(labelsResponseDTO)
                .build();

    }
}

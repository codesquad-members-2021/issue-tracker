package com.team11.issue.dto.issue;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.team11.issue.domain.History;
import com.team11.issue.domain.Issue;
import com.team11.issue.domain.IssueHasLabel;
import com.team11.issue.dto.history.HistoryResponseDTO;
import com.team11.issue.dto.label.LabelResponseDTO;
import com.team11.issue.dto.milestone.MilestoneResponseDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

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
    private final List<LabelResponseDTO> labels;

    public boolean getIsOpen() {
        return isOpen;
    }

    private static List<LabelResponseDTO> convertLabels(List<IssueHasLabel> issueHasLabels) {
        return issueHasLabels.stream()
                .map(issueHasLabel -> LabelResponseDTO.from(issueHasLabel.getLabel()))
                .collect(Collectors.toList());
    }

    public static IssueResponseDTO from(Issue issue, History history, MilestoneResponseDTO milestoneResponseDTO, List<IssueHasLabel> issueHasLabels) {
        return IssueResponseDTO.builder()
                .issueId(issue.getId())
                .history(HistoryResponseDTO.from(history))
                .isOpen(issue.isOpen())
                .title(issue.getTitle())
                .contents(issue.getContents())
                .milestone(milestoneResponseDTO)
                .labels(convertLabels(issueHasLabels))
                .build();

    }
}

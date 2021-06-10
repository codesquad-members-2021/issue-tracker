package team02.issue_tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team02.issue_tracker.domain.Milestone;

@AllArgsConstructor
@Getter
public class MilestoneDetailResponse {

    private Long id;
    private String title;
    private int totalIssues;
    private int openIssues;

    public MilestoneDetailResponse(Milestone milestone) {
        this(milestone.getId(), milestone.getTitle(), milestone.getTotalIssueCount(), milestone.getOpenIssueCount());
    }
}

package team02.issue_tracker.dto.issue;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team02.issue_tracker.domain.Milestone;

@AllArgsConstructor
@Getter
public class DetailIssueMilestoneResponse {

    private Long id;
    private String title;
    private int totalIssues;
    private int openIssues;

    public DetailIssueMilestoneResponse(Milestone milestone) {
        this(milestone.getId(), milestone.getTitle(), milestone.getTotalIssueCount(), milestone.getOpenIssueCount());
    }
}

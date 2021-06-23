package team02.issue_tracker.dto.issue;

import lombok.Getter;
import team02.issue_tracker.domain.Milestone;

@Getter
public class DetailIssueMilestoneResponse {

    private Long id;
    private String title;
    private int totalIssues;
    private int openIssues;

    public DetailIssueMilestoneResponse(Milestone milestone, Long totalIssueCount, Long openIssueCount) {
        this.id = milestone.getId();
        this.title = milestone.getTitle();
        this.totalIssues = Math.toIntExact(totalIssueCount);
        this.openIssues = Math.toIntExact(openIssueCount);
    }
}

package team02.issue_tracker.dto.issue;

import lombok.Getter;

@Getter
public class IssueCountResponse {

    private Long openIssues;
    private Long closedIssues;

    public IssueCountResponse(Long openIssues, Long closedIssues) {
        this.openIssues = openIssues;
        this.closedIssues = closedIssues;
    }
}

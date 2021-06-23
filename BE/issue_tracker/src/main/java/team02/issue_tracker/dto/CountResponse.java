package team02.issue_tracker.dto;

import lombok.Getter;

@Getter
public class CountResponse {

    private Long openIssues;
    private Long closedIssues;
    private Long labels;
    private Long openMilestones;
    private Long closedMilestones;

    public CountResponse(Long openIssues, Long closedIssues, Long labels, Long openMilestones, Long closedMilestones) {
        this.openIssues = openIssues;
        this.closedIssues = closedIssues;
        this.labels = labels;
        this.openMilestones = openMilestones;
        this.closedMilestones = closedMilestones;
    }
}

package team02.issue_tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class CountResponse {

    private Long openIssues;
    private Long closedIssues;
    private Long labels;
    private Long openMilestones;
    private Long closedMilestones;
}

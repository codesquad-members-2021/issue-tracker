package team02.issue_tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class CountResponse {

    private int openIssues;
    private int closedIssues;
    private int labels;
    private int openMilestones;
    private int closedMilestones;
}

package team02.issue_tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class MilestoneCountResponse {

    private int openMilestones;
    private int closedMilestones;
}

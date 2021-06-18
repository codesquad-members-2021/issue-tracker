package team02.issue_tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class MilestoneCountResponse {

    private Long openMilestones;
    private Long closedMilestones;
}

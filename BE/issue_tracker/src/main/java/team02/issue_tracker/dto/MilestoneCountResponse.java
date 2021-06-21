package team02.issue_tracker.dto;

import lombok.Getter;

@Getter
public class MilestoneCountResponse {

    private Long openMilestones;
    private Long closedMilestones;

    public MilestoneCountResponse(Long openMilestones, Long closedMilestones) {
        this.openMilestones = openMilestones;
        this.closedMilestones = closedMilestones;
    }
}

package team02.issue_tracker.dto.issue;

import lombok.Getter;
import team02.issue_tracker.domain.Milestone;

@Getter
public class IssueMilestoneResponse {

    private Long id;
    private String title;

    public IssueMilestoneResponse(Milestone milestone) {
        this.id = milestone.getId();
        this.title = milestone.getTitle();
    }
}

package team02.issue_tracker.dto.issue;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team02.issue_tracker.domain.Milestone;

@AllArgsConstructor
@Getter
public class IssueMilestoneResponse {

    private Long id;
    private String title;

    public IssueMilestoneResponse(Milestone milestone) {
        this(milestone.getId(), milestone.getTitle());
    }
}

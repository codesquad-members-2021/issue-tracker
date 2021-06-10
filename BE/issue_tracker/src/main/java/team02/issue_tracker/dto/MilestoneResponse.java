package team02.issue_tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team02.issue_tracker.domain.Milestone;

@AllArgsConstructor
@Getter
public class MilestoneResponse {

    private Long id;
    private String title;

    public MilestoneResponse(Milestone milestone) {
        this(milestone.getId(), milestone.getTitle());
    }
}

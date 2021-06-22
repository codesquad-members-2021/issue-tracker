package team02.issue_tracker.dto;

import lombok.Getter;
import team02.issue_tracker.domain.Milestone;

import java.time.LocalDate;

@Getter
public class MilestoneRequest {

    private String title;
    private String content;
    private LocalDate dueDate;

    public Milestone toMilestone() {
        return new Milestone(title, content, dueDate);
    }
}

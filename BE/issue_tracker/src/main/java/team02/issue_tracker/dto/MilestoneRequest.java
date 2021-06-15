package team02.issue_tracker.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team02.issue_tracker.domain.Milestone;

import java.time.LocalDate;

@NoArgsConstructor
@Getter
public class MilestoneRequest {

    private String title;
    private String content;
    private LocalDate dueDate;

    public Milestone toMilestone() {
        return new Milestone(title, content, dueDate);
    }
}

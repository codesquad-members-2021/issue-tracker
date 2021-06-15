package team02.issue_tracker.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team02.issue_tracker.domain.Milestone;

import java.time.LocalDate;

@NoArgsConstructor
@Getter
public class MilestoneResponse {

    private Long id;
    private String title;
    private String content;
    private LocalDate dueDate;
    private int openIssue;
    private int closedIssue;

    public MilestoneResponse(Milestone milestone) {
        this.id = milestone.getId();
        this.title = milestone.getTitle();
        this.content = milestone.getContent();
        this.dueDate = milestone.getDueDate();
        this.openIssue = milestone.getOpenIssueCount();
        this.closedIssue = milestone.getClosedIssueCount();

    }
}

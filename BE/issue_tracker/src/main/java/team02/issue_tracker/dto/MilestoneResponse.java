package team02.issue_tracker.dto;

import lombok.Getter;
import team02.issue_tracker.domain.Milestone;

import java.time.LocalDate;

@Getter
public class MilestoneResponse {

    private Long id;
    private String title;
    private String content;
    private LocalDate dueDate;
    private int openIssue;
    private int closedIssue;

    public MilestoneResponse(Milestone milestone, Long openIssue, Long closedIssue) {
        this.id = milestone.getId();
        this.title = milestone.getTitle();
        this.content = milestone.getContent();
        this.dueDate = milestone.getDueDate();
        this.openIssue = Math.toIntExact(openIssue);
        this.closedIssue = Math.toIntExact(closedIssue);
    }
}

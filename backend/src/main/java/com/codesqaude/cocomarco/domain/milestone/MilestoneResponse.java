package com.codesqaude.cocomarco.domain.milestone;

import com.codesqaude.cocomarco.domain.issue.IssueStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
public class MilestoneResponse {
    private static final int PERCENT = 100;
    private Long id;
    private String title;
    private String detail;
    private LocalDate deadLine;
    private int complete;
    private int openIssueCount;
    private int closeIssueCount;

    public static MilestoneResponse of(Milestone milestone) {
        int openIssueCount = milestone.countIssuesByStatus(IssueStatus.OPEN);
        int closeIssueCount = milestone.countIssuesByStatus(IssueStatus.CLOSE);
        double progress = closeIssueCount / ((double) openIssueCount + closeIssueCount);
        return new MilestoneResponse(milestone.getId(), milestone.getTitle(), milestone.getDetail(),
                milestone.getDeadLine(), (int) (progress * PERCENT),
                openIssueCount, closeIssueCount);
    }
}

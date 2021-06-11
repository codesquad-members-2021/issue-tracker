package com.codesqaude.cocomarco.domain.milestone.dto;

import com.codesqaude.cocomarco.domain.issue.model.IssueStatus;
import com.codesqaude.cocomarco.domain.milestone.Milestone;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
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

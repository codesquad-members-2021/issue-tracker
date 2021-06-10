package com.codesqaude.cocomarco.domain.milestone;

import com.codesqaude.cocomarco.domain.issue.Issue;
import com.codesqaude.cocomarco.domain.issue.IssueStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Milestone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String detail;
    private LocalDate deadLine;

    @OneToMany
    @JoinColumn(name = "milestone_id")
    private List<Issue> issues = new ArrayList<>();

    public Milestone(String title, String detail, LocalDate deadLine) {
        this.title = title;
        this.detail = detail;
        this.deadLine = deadLine;
    }

    public int countIssuesByStatus(IssueStatus issueStatus) {
        return (int) issues.stream().filter(issue -> issueStatus.equals(issue.getStatus())).count();
    }
}

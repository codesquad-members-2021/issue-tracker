package team02.issue_tracker.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
public class Milestone {
    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String content;
    private LocalDate createdDate;
    private LocalDate dueDate;
    private boolean isOpen;
    private boolean isDeleted;

    @OneToMany(mappedBy = "milestone")
    private List<Issue> issues = new ArrayList<>();

    public Milestone(String title, String content, LocalDate dueDate) {
        this.title = title;
        this.content = content;
        this.dueDate = dueDate;
        this.createdDate = LocalDate.now();
        this.isOpen = true;
    }

    public int getTotalIssueCount() {
        return (int) issues.stream()
                .filter(issue -> !issue.isDeleted())
                .count();
    }

    public int getOpenIssueCount() {
        return (int) issues.stream()
                .filter(issue -> !issue.isDeleted())
                .filter(Issue::isOpen)
                .count();
    }

    public int getClosedIssueCount() {
        return (int) issues.stream()
                .filter(issue -> !issue.isDeleted())
                .filter(issue -> !issue.isOpen())
                .count();
    }
}

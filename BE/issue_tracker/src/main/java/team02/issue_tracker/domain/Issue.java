package team02.issue_tracker.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team02.issue_tracker.exception.IllegalStatusException;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @OneToMany(mappedBy = "issue")
    private List<IssueLabel> issueLabels = new ArrayList<>();

    private LocalDateTime createdTime;
    private boolean open;
    private boolean deleted;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_issue_user1"))
    private User writer;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_issue_milestone1"))
    private Milestone milestone;

    @OneToMany(mappedBy = "issue")
    private List<IssueAssignee> issueAssignees = new ArrayList<>();

    @OneToMany(mappedBy = "issue")
    private List<Comment> comments = new ArrayList<>();

    public Issue(String title, User writer, boolean open) {
        this.title = title;
        this.writer = writer;
        this.open = open;
        this.createdTime = LocalDateTime.now();
    }

    public void addMilestone(Milestone milestone) {
        this.milestone = milestone;
    }

    public void close() {
        if (!open) {
            throw new IllegalStatusException("열린 이슈가 아닙니다.");
        }
        open = false;
    }

    public void open() {
        if (open) {
            throw new IllegalStatusException("닫힌 이슈가 아닙니다.");
        }
        open = true;
    }

    public void editTitle(String title) {
        this.title = title;
    }

    public void editIssueAssignees(List<IssueAssignee> issueAssignees) {
        this.issueAssignees = issueAssignees;
    }

    public void editIssueLabels(List<IssueLabel> issueLabels) {
        this.issueLabels = issueLabels;
    }

    public void editMilestone(Milestone milestone) {
        this.milestone = milestone;
    }

    public void delete() {
        deleted = true;
    }

    public List<Comment> getComments() {
        return comments.stream()
                .filter(comment -> !comment.isDeleted())
                .collect(Collectors.toList());
    }

    public void deleteMilestone() {
        milestone = null;
    }
}

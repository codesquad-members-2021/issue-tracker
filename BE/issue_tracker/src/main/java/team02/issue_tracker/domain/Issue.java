package team02.issue_tracker.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import team02.issue_tracker.exception.IllegalStatusException;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE issue SET is_deleted = true WHERE id = ?")
@Where(clause = "is_deleted = false")
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @OneToMany(mappedBy = "issue", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<IssueLabel> issueLabels = new ArrayList<>();

    private LocalDateTime createdTime;
    private boolean isOpen;
    private boolean isDeleted;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_issue_user1"))
    private User writer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_issue_milestone1"))
    private Milestone milestone;

    @OneToMany(mappedBy = "issue", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<IssueAssignee> issueAssignees = new HashSet<>();

    @OneToMany(mappedBy = "issue", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Comment> comments = new HashSet<>();

    public Issue(String title, User writer, boolean open) {
        this.title = title;
        this.writer = writer;
        this.isOpen = open;
        this.createdTime = LocalDateTime.now();
    }

    public void addMilestone(Milestone milestone) {
        this.milestone = milestone;
    }

    public void close() {
        if (!isOpen) {
            throw new IllegalStatusException("열린 이슈가 아닙니다.");
        }
        isOpen = false;
    }

    public void open() {
        if (isOpen) {
            throw new IllegalStatusException("닫힌 이슈가 아닙니다.");
        }
        isOpen = true;
    }

    public void editTitle(String title) {
        this.title = title;
    }

    public void editIssueAssignees(Set<IssueAssignee> issueAssignees) {
        this.issueAssignees = issueAssignees;
    }

    public void editIssueLabels(List<IssueLabel> issueLabels) {
        this.issueLabels = issueLabels;
    }

    public void editMilestone(Milestone milestone) {
        this.milestone = milestone;
    }

    public void deleteMilestone() {
        milestone = null;
    }

    public void addIssueLabels(List<IssueLabel> issueLabels) {
        this.issueLabels = issueLabels;
    }

    public void addIssueAssignees(Set<IssueAssignee> issueAssignees) {
        this.issueAssignees = issueAssignees;
    }

    public void addComment(Comment comment) {
        comments.add(comment);
    }
}

package com.codesqaude.cocomarco.domain.issue.model;

import com.codesqaude.cocomarco.common.exception.auth.NoPermissionUserException;
import com.codesqaude.cocomarco.domain.comment.Comment;
import com.codesqaude.cocomarco.domain.milestone.Milestone;
import com.codesqaude.cocomarco.domain.user.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String text;
    private LocalDateTime writingTime;

    @Enumerated(EnumType.STRING)
    private IssueStatus status;

    @OneToMany(mappedBy = "issue")
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Assignment> assignments = new HashSet<>();

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<IssueLabel> issueLabels = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "milestone_id")
    private Milestone milestone;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "writer")
    private User writer;

    public Issue(String title, String text) {
        this.title = title;
        this.text = text;
    }

    //연관 관계 메소드
    public void setWriter(User writer) {
        this.writer = writer;
        writer.addIssue(this);
    }

    public void changeAssignment(List<Assignment> assignments) {
        this.assignments.clear();
        this.assignments.addAll(assignments);
        for (Assignment assignment : assignments) {
            assignment.setIssue(this);
        }
    }

    public void changeIssueLabels(List<IssueLabel> issueLabels) {
        this.issueLabels.clear();
        this.issueLabels.addAll(issueLabels);
        for (IssueLabel issueLabel : issueLabels) {
            issueLabel.setIssue(this);
        }
    }

    public void setMilestone(Milestone milestone) {
        this.milestone = milestone;
        milestone.addIssue(this);
    }

    public void changeTitle(String title) {
        this.title = title;
    }

    public void changeStatus(IssueStatus status) {
        this.status = status;
    }

    public void changeMilestone(Milestone milestone) {
        this.milestone = milestone;
    }

    public static Issue createIssue(User writer, String title, String text, @Nullable List<Assignment> assignments, @Nullable List<IssueLabel> issueLabels, @Nullable Milestone milestone) {
        Issue issue = new Issue(title, text);
        issue.setWriter(writer);
        issue.setMilestone(milestone);
        issue.changeAssignment(assignments);
        issue.changeIssueLabels(issueLabels);
        issue.status = IssueStatus.OPEN;
        issue.writingTime = LocalDateTime.now();

        return issue;
    }

    public void sameWriter(User user) {
        if (!this.writer.sameUser(user.getId())) {
            throw new NoPermissionUserException();
        }
    }

    @Override
    public String toString() {
        return "Issue{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", text='" + text + '\'' +
                ", writingTime=" + writingTime +
                ", status=" + status +
                '}';
    }

}

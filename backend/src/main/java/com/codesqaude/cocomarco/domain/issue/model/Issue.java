package com.codesqaude.cocomarco.domain.issue.model;

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
import java.util.List;

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

    @OneToMany(mappedBy = "issue", cascade = CascadeType.ALL)
    private List<Assignment> assignments = new ArrayList<>();

    @OneToMany(mappedBy = "label", cascade = CascadeType.ALL)
    private List<IssueLabel> issueLabels = new ArrayList<>();

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

    public void addAssignment(List<Assignment> assignments) {
        for (Assignment assignment : assignments) {
            this.assignments.add(assignment);
            assignment.setIssue(this);
        }
    }

    public void addIssueLabel(List<IssueLabel> issueLabels) {
        for (IssueLabel issueLabel : issueLabels) {
            this.issueLabels.add(issueLabel);
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

    public static Issue createIssue(User writer, String title, String text, @Nullable List<Assignment> assignments, @Nullable List<IssueLabel> issueLabels, @Nullable Milestone milestone) {
        Issue issue = new Issue(title, text);
        issue.setWriter(writer);
        issue.setMilestone(milestone);
        issue.addAssignment(assignments);
        issue.addIssueLabel(issueLabels);
        issue.status = IssueStatus.OPEN;
        issue.writingTime = LocalDateTime.now();

        return issue;
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

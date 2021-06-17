package com.codesquad.issuetracker.domain;

import javax.persistence.*;
import javax.persistence.JoinColumn;

@Entity
@Table(name = "issue_label")
public class IssueLabel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @ManyToOne
    @JoinColumn(name = "label_id")
    private Label label;

    private IssueLabel(Issue issue, Label label) {
        this.issue = issue;
        this.label = label;
    }

    public IssueLabel(Long id, Issue issue, Label label) {
        this(issue, label);
        this.id = id;
    }

    public IssueLabel() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Issue getIssue() {
        return issue;
    }

    public void setIssue(Issue issue) {
        this.issue = issue;
    }

    public Label getLabel() {
        return label;
    }

    public void setLabel(Label label) {
        this.label = label;
    }

    public static IssueLabel issueToIssueLabel(Issue issue, Label label) {
        return new IssueLabel(issue, label);
    }
}

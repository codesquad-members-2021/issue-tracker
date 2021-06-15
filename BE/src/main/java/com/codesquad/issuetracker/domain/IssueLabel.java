package com.codesquad.issuetracker.domain;

import javax.persistence.*;
import javax.persistence.JoinColumn;

@Entity
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

    public IssueLabel(Long id, Issue issue, Label label) {
        this.id = id;
        this.issue = issue;
        this.label = label;
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
}

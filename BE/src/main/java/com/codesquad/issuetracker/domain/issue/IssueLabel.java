package com.codesquad.issuetracker.domain.issue;

import com.codesquad.issuetracker.domain.label.Label;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.persistence.JoinColumn;

@Entity
@Table(name = "issue_label")
@Getter
@Setter

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

    public IssueLabel(Issue issue, Label label) {
        this.issue = issue;
        this.label = label;
    }

    public IssueLabel(Long id, Issue issue, Label label) {
        this(issue, label);
        this.id = id;
    }

    public IssueLabel() {

    }

    public static IssueLabel issueToIssueLabel(Issue issue, Label label) {
        return new IssueLabel(issue, label);
    }
}

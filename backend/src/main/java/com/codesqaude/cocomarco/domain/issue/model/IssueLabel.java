package com.codesqaude.cocomarco.domain.issue.model;

import com.codesqaude.cocomarco.domain.label.Label;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class IssueLabel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "label_id")
    private Label label;

    private IssueLabel(Label label) {
        this.label = label;
    }

    public static IssueLabel createIssueLabel(Label label) {
        return new IssueLabel(label);
    }

    public void setIssue(Issue issue) {
        this.issue = issue;
    }

    @Override
    public String toString() {
        return "IssueLabel{" +
                "id=" + id +
                '}';
    }

}

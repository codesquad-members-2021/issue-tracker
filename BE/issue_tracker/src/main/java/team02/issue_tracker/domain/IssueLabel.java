package team02.issue_tracker.domain;

import javax.persistence.*;

@Entity
public class IssueLabel {
    @Id @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @ManyToOne
    @JoinColumn(name = "label_id")
    private Label label;
}

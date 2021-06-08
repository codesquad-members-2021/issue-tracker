package team02.issue_tracker.domain;

import javax.persistence.*;

@Entity
public class IssueAssignee {
    @Id @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User assignee;
}

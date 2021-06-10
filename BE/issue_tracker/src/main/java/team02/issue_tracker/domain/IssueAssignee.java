package team02.issue_tracker.domain;

import lombok.Getter;
import team02.issue_tracker.domain.composite_key.IssueAssigneeId;

import javax.persistence.*;

@IdClass(IssueAssigneeId.class)
@Entity
@Getter
public class IssueAssignee {
    @Id
    @ManyToOne
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @Id
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User assignee;
}

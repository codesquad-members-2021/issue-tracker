package team02.issue_tracker.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team02.issue_tracker.domain.composite_key.IssueAssigneeId;

import javax.persistence.*;

@IdClass(IssueAssigneeId.class)
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class IssueAssignee {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User assignee;

    public IssueAssignee(Issue issue, User assignee) {
        this.issue = issue;
        this.assignee = assignee;
    }
}

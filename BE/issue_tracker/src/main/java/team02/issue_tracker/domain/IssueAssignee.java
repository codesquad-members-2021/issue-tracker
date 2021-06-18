package team02.issue_tracker.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team02.issue_tracker.domain.composite_key.IssueAssigneeId;

import javax.persistence.*;

@IdClass(IssueAssigneeId.class)
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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

package team02.issue_tracker.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.Issue;

import java.util.List;

import static org.springframework.util.StringUtils.hasText;
import static team02.issue_tracker.domain.Filter.*;
import static team02.issue_tracker.domain.QComment.comment;
import static team02.issue_tracker.domain.QIssue.issue;
import static team02.issue_tracker.domain.QIssueAssignee.issueAssignee;
import static team02.issue_tracker.domain.QIssueLabel.issueLabel;
import static team02.issue_tracker.domain.QLabel.label;
import static team02.issue_tracker.domain.QMilestone.milestone;
import static team02.issue_tracker.domain.QUser.user;

@RequiredArgsConstructor
@Repository
public class IssueSearchRepository {

    private final JPAQueryFactory queryFactory;

    public List<Issue> findIssuesFilteredBy(Long userId, Boolean isOpen, String filter, Long assigneeId, Long labelId, Long milestoneId, Long writerId) {
        return queryFactory.selectFrom(issue)
                .leftJoin(issue.writer, user).fetchJoin()
                .leftJoin(issue.issueLabels, issueLabel).fetchJoin()
                .leftJoin(issueLabel.label, label).fetchJoin()
                .leftJoin(issue.issueAssignees, issueAssignee).fetchJoin()
                .leftJoin(issueAssignee.assignee, user).fetchJoin()
                .leftJoin(issue.milestone, milestone).fetchJoin()
                .leftJoin(issue.comments, comment).fetchJoin()
                .where(
                        isOpenEqual(isOpen),
                        filterEqual(filter, userId),
                        writerEqual(writerId),
                        labelIdEqual(labelId),
                        assigneeIdEqual(assigneeId),
                        milestoneIdEqual(milestoneId)
                )
                .distinct()
                .fetch();
    }

    private BooleanExpression isOpenEqual(Boolean isOpen) {
        return isOpen != null ? issue.isOpen.eq(isOpen) : null;
    }

    private BooleanExpression filterEqual(String filter, Long userId) {
        if (!hasText(filter) || userId == null) {
            return null;
        }
        if (filter.equals(MY_ISSUE.getName())) {
            return issue.writer.id.eq(userId);
        }
        if (filter.equals(MY_COMMENT.getName())) {
            return comment.writer.id.eq(userId);
        }
        if (filter.equals(MY_ASSIGN.getName())) {
            return issueAssignee.assignee.id.eq(userId);
        }
        return null;
    }

    private BooleanExpression writerEqual(Long writerId) {
        return writerId != null ? issue.writer.id.eq(writerId) : null;
    }

    private BooleanExpression labelIdEqual(Long labelId) {
        return labelId != null ? issueLabel.label.id.eq(labelId) : null;
    }

    private BooleanExpression assigneeIdEqual(Long assigneeId) {
        return assigneeId != null ? issueAssignee.assignee.id.eq(assigneeId) : null;
    }

    private BooleanExpression milestoneIdEqual(Long milestoneId) {
        return milestoneId != null ? issue.milestone.id.eq(milestoneId) : null;
    }
}

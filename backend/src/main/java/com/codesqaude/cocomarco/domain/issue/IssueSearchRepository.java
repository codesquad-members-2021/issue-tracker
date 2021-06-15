package com.codesqaude.cocomarco.domain.issue;

import com.codesqaude.cocomarco.domain.issue.model.Issue;
import com.codesqaude.cocomarco.domain.issue.model.IssueStatus;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueSearchRequest;
import com.codesqaude.cocomarco.domain.milestone.QMilestone;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

import static com.codesqaude.cocomarco.domain.comment.QComment.comment;
import static com.codesqaude.cocomarco.domain.issue.model.QAssignment.assignment;
import static com.codesqaude.cocomarco.domain.issue.model.QIssue.issue;
import static com.codesqaude.cocomarco.domain.issue.model.QIssueLabel.issueLabel;
import static com.codesqaude.cocomarco.domain.milestone.QMilestone.milestone;
import static com.codesqaude.cocomarco.domain.user.QUser.user;
import static org.springframework.util.StringUtils.hasText;

@Repository
public class IssueSearchRepository {

    private final JPAQueryFactory jpaQueryFactory;

    public IssueSearchRepository(EntityManager em) {
        this.jpaQueryFactory = new JPAQueryFactory(em);
    }

    public List<Issue> searchByBuilder(IssueSearchRequest request) {

        return jpaQueryFactory
                .select(issue)
                .from(issue)
                .leftJoin(issue.assignments, assignment).fetchJoin()
                .leftJoin(issue.writer, user).fetchJoin()
                .leftJoin(issue.issueLabels, issueLabel).fetchJoin()
                .leftJoin(issue.milestone, milestone).fetchJoin()
                .leftJoin(issue.comments, comment).fetchJoin()
                .where(
                        issueStatus(request.getStatus()),
                        createdBy(request.getCreatedBy()),
                        assignee(request.getAssignee()),
                        milestone(request.getMilestone()),
                        mentions(request.getMentions()),
                        labels(request.getLabels())
                )
                .distinct()
                .fetch();

    }

    private BooleanExpression issueStatus(IssueStatus status) {
        return status != null ? issue.status.eq(status) : null;
    }

    private BooleanExpression createdBy(String writer) {
        return hasText(writer) ? issue.writer.id.eq(UUID.fromString(writer)) : null;
    }

    private BooleanExpression assignee(String assignee) {
        return hasText(assignee) ? assignment.user.id.eq(UUID.fromString(assignee)) : null;
    }

    private BooleanExpression milestone(Long milestone) {
        return !Objects.isNull(milestone) ? QMilestone.milestone.id.eq(milestone) : null;
    }

    private BooleanExpression mentions(String writer) {
        return hasText(writer) ? comment.writer.id.eq(UUID.fromString(writer)) : null;
    }

    private BooleanExpression labels(List<Long> labels) {
        return labels != null ? issueLabel.label.id.in(labels) : null;
    }
}

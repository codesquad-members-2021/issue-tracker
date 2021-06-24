package com.codesquad.issuetracker.domain.issue;

import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.codesquad.issuetracker.domain.assignee.QAssignee.assignee;
import static com.codesquad.issuetracker.domain.issue.QIssue.issue;
import static com.codesquad.issuetracker.domain.comment.QComment.comment;

@Repository
public class IssueRepositorySupport extends QuerydslRepositorySupport {

    private final JPAQueryFactory queryFactory;

    public IssueRepositorySupport(JPAQueryFactory queryFactory) {
        super(Issue.class);
        this.queryFactory = queryFactory;
    }

    public List<Issue> getFilteredIssues(IssueFilter issueFilter) {
        JPAQuery query = queryFactory
                .selectFrom(issue)
                .where(getPredicate(issueFilter));

        Long userId = issueFilter.getAssignee();
        if (userId != null) {
            query.innerJoin(assignee)
                    .on(assignee.issueId.eq(issue.id))
                    .where(assignee.userId.eq(userId));
        }

        userId = issueFilter.getCommenter();
        if (userId != null) {
            query.innerJoin(comment)
                    .on(comment.issueId.eq(issue.id))
                    .where(comment.user.id.eq(userId));
        }

        return query.fetch();

    }

    public Predicate getPredicate(IssueFilter filter) {
        return new PredicateBuilder(issue.isNotNull())
                .containsAnd(issue.title, filter.getTitle())
                .isBooleanAnd(issue.status, filter.getStatus())
                .isLongEqualAnd(issue.user.id, filter.getAuthor())
                .build();
    }

    public List<Issue> findByTitle(String title) {
        return queryFactory
                .selectFrom(issue)
                .where(issue.title.contains(title))
                .fetch();
    }

    public List<Issue> findByStatusTrue() {
        return queryFactory
                .selectFrom(issue)
                .where(issue.status.isTrue())
                .fetch();
    }

    public List<Issue> findByStatusFalse() {
        return queryFactory
                .selectFrom(issue)
                .where(issue.status.isFalse())
                .fetch();
    }

    public List<Issue> findByAuthor(Long userId) {
        return queryFactory
                .selectFrom(issue)
                .where(issue.user.id.eq(userId))
                .fetch();
    }

    public List<Issue> findByAssignee(Long userId) {
        return queryFactory
                .selectFrom(issue)
                .innerJoin(assignee)
                .on(assignee.issueId.eq(issue.id))
                .where(assignee.userId.eq(userId))
                .fetch();
    }

    public List<Issue> findByCommentUserId(Long userId) {
        return queryFactory
                .selectFrom(issue)
                .innerJoin(comment)
                .on(comment.issueId.eq(issue.id))
                .where(comment.user.id.eq(userId))
                .fetch();
    }

}

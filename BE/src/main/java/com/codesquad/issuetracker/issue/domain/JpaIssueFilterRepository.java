package com.codesquad.issuetracker.issue.domain;

import com.codesquad.issuetracker.issue.dto.IssueFilter;
import com.codesquad.issuetracker.issue.infra.IssueFilterRepository;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

import static com.codesquad.issuetracker.issue.domain.QIssue.issue;
import static com.codesquad.issuetracker.label.domain.QLabel.label;
import static com.codesquad.issuetracker.milestone.domain.QMilestone.milestone;
import static com.codesquad.issuetracker.user.domain.QUser.user;

@Repository
public class JpaIssueFilterRepository implements IssueFilterRepository {

    private final JPAQueryFactory jpaQueryFactory;

    public JpaIssueFilterRepository(EntityManager em) {
        this.jpaQueryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<Issue> findByIssueFilter(IssueFilter issueFilter) {
        JPAQuery<Issue> query = jpaQueryFactory
                .select(issue)
                .distinct()
                .from(issue);

        if (issueFilter.getLabel() != null && issueFilter.getLabel().length() > 0) {
            query = query.innerJoin(issue.labels, label).on(label.name.contains(issueFilter.getLabel()));
        }

        if (issueFilter.getMilestone() != null && issueFilter.getMilestone().length() > 0) {
            query = query.innerJoin(issue.milestone, milestone).on(milestone.title.contains(issueFilter.getMilestone()));
        }

        if (issueFilter.getAuthor() != null) {
            query = query.innerJoin(issue.author, user).on(user.id.eq(issueFilter.getAssignee()));
        }

        if (issueFilter.getAssignee() != null) {
            query = query.innerJoin(issue.assignees, user).on(user.id.eq(issueFilter.getAssignee()));
        }

        return query.where(
                open(issueFilter.getOpen())
        ).fetch();
    }

    private BooleanExpression open(Boolean open) {
        if (open == null) {
            return null;
        }
        return issue.open.eq(open);
    }

}

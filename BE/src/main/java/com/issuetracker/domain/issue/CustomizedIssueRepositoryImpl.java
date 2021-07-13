package com.issuetracker.domain.issue;

import com.issuetracker.domain.label.Label;
import com.issuetracker.domain.user.User;
import com.issuetracker.web.dto.reqeust.FilterRequestDTO;
import com.issuetracker.web.dto.vo.Status;
import com.querydsl.core.QueryResults;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.PathBuilder;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;

import static com.issuetracker.domain.issue.QIssue.issue;
import static com.issuetracker.domain.user.QUser.user;
import static com.issuetracker.domain.label.QLabel.label;
import static com.issuetracker.domain.milestone.QMilestone.milestone;
import static com.issuetracker.domain.comment.QComment.comment1;
import static org.springframework.util.StringUtils.hasText;

@RequiredArgsConstructor
public class CustomizedIssueRepositoryImpl implements CustomizedIssueRepository {

    private final JPAQueryFactory queryFactory;

    @Override
    public Page<Issue> findAllIssuesFilteredBySearchRequest(FilterRequestDTO searchRequest, Pageable pageable) {
        return findAllIssuesFilteredByStatusAndSearchRequest(searchRequest.getStatus(), searchRequest, pageable);
    }

    @Override
    public long countIssueFilteredByStatusAndSearchRequest(String status, FilterRequestDTO searchRequest, Pageable pageable) {
        return findIssuesByStatusAndSearchRequest(status, searchRequest, pageable)
                .fetchCount();
    }

    private Page<Issue> findAllIssuesFilteredByStatusAndSearchRequest(String status, FilterRequestDTO searchRequest, Pageable pageable) {
        JPAQuery<Issue> query = findIssuesByStatusAndSearchRequest(status, searchRequest, pageable);
        for (Sort.Order o : pageable.getSort()) {
            PathBuilder<Issue> pathBuilder = new PathBuilder<>(issue.getType(), issue.getMetadata());
            query.orderBy(new OrderSpecifier(o.isAscending() ? Order.ASC : Order.DESC,
                    pathBuilder.get(o.getProperty())));
        }
        QueryResults<Issue> issueQueryResults = query.fetchResults();
        return new PageImpl<>(issueQueryResults.getResults(), pageable, issueQueryResults.getTotal());
    }

    private JPAQuery<Issue> findIssuesByStatusAndSearchRequest(String status, FilterRequestDTO searchRequest, Pageable pageable) {
        return queryFactory
                .select(issue)
                .distinct()
                .from(issue)
                .leftJoin(issue.author, user)
                .leftJoin(issue.labels, label)
                .leftJoin(issue.assignees, user)
                .leftJoin(issue.milestone, milestone)
                .leftJoin(issue.comments, comment1)
                .where(
                        statusEquals(status),
                        authorEquals(searchRequest.getAuthor()),
                        labelEquals(searchRequest.getLabel()),
                        milestoneEquals(searchRequest.getMilestone()),
                        assigneeEquals(searchRequest.getAssignee()),
                        commenterEquals(searchRequest.getCommenter())
                )
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize());
    }

    private BooleanExpression statusEquals(String status) {
        return hasText(status) ? issue.isOpen.eq(Status.statusToBoolean(status)) : null;
    }

    private BooleanExpression authorEquals(String author) {
        return hasText(author) ? user.userName.eq(author) : null;
    }

    private BooleanExpression milestoneEquals(String milestoneTitle) {
        return hasText(milestoneTitle) ? milestone.title.eq(milestoneTitle) : null;
    }

    private BooleanExpression assigneeEquals(List<String> assignee) {
        if (assignee == null) {
            return null;
        }
        List<User> assigneeList = getAssignees(assignee);
        if (assigneeList.isEmpty()) {
            return null;
        }
        return user.in(assigneeList);
    }

    private List<User> getAssignees(List<String> assignees) {
        return queryFactory.selectFrom(user)
                .where(user.userName.in(assignees))
                .fetch();
    }

    private BooleanExpression commenterEquals(String commenter) {
        if (commenter == null) {
            return null;
        }
        return comment1.author.userName.eq(commenter);
    }

    private BooleanExpression labelEquals(List<String> labels) {
        if (labels == null) {
            return null;
        }
        List<Label> labelsList = getLabels(labels);
        if (labelsList.isEmpty()) {
            return null;
        }
        return label.in(labelsList);
    }

    private List<Label> getLabels(List<String> labels) {
        return queryFactory.selectFrom(label)
                .where(label.name.in(labels))
                .fetch();
    }
}

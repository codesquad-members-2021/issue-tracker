package com.issuetracker.domain.issue;


import com.issuetracker.domain.user.User;
import com.issuetracker.web.dto.reqeust.SearchRequestDTO;
import com.issuetracker.web.dto.vo.Status;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

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

    public List<Issue> findAllIssuesFilteredBy(SearchRequestDTO searchRequest) {
        return queryFactory
                .select(issue)
                .distinct()
                .from(issue)
                .leftJoin(issue.author, user)
                .leftJoin(issue.labels, label)
                .leftJoin(issue.milestone, milestone)
                .leftJoin(issue.comments, comment1)
                .where(statusEquals(searchRequest.getStatus()),
                        authorEquals(searchRequest.getAuthor()),
//                        labelEquals(labelName),
                        milestoneEquals(searchRequest.getMilestone()),
                        assigneeEquals(searchRequest.getAssignee()),
                        commenterEquals(searchRequest.getCommenter()))
                .limit(100)
                .fetch();

//        return queryFactory
//                .selectFrom(issue)
//                .where(
//                        statusEquals(searchRequest.getStatus()),
//                        authorEquals(searchRequest.getAuthor()),
//                        assigneeEquals(searchRequest.getAssignee())
//                )
//                .fetch();
    }

    public BooleanExpression statusEquals(String status) {
        return hasText(status) ? issue.isOpen.eq(Status.statusToBoolean(status)) : null;
    }

    public BooleanExpression authorEquals(String author) {
        return hasText(author) ? user.userName.eq(author) : null;
    }

    public BooleanExpression milestoneEquals(String milestoneTitle) {
        return hasText(milestoneTitle) ? milestone.title.eq(milestoneTitle) : null;
    }

    public BooleanExpression assigneeEquals(String assignee) {
        if (!hasText(assignee)) {
            return null;
        }
        User user = findByUserName(assignee);
        if (user == null) {
            return null;
        }
        return issue.assignees.contains(user);
    }

    private BooleanExpression commenterEquals(String commenter) {
        if (commenter == null) {
            return null;
        }
        return comment1.author.userName.eq(commenter);
    }

    private User findByUserName(String userName) {
        return queryFactory.selectFrom(user)
                .where(user.userName.eq(userName))
                .fetchFirst();
    }

//    public BooleanExpression commenterEquals(User commenter) {
//        return commenter != null ? issue.comments.contains(commenter) : null;
//    }
//
//    public BooleanExpression labelEquals(List<String> label) {
//        return label!=null?
//    }
}

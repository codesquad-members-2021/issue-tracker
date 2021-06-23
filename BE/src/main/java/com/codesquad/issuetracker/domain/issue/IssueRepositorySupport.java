package com.codesquad.issuetracker.domain.issue;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.codesquad.issuetracker.domain.assignee.QAssignee.assignee;
import static com.codesquad.issuetracker.domain.issue.QIssue.issue;

@Repository
public class IssueRepositorySupport extends QuerydslRepositorySupport {

    private final JPAQueryFactory queryFactory;

    public IssueRepositorySupport(JPAQueryFactory queryFactory) {
        super(Issue.class);
        this.queryFactory = queryFactory;
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

//    // 이슈 중 내가 담당자로 포함된 이슈를 가져오기
//    public List<Issue> findByAssignee(Long userId) {
//        return queryFactory
//                .selectFrom(issue)
//                .leftJoin(issue.assignees, assignee)
//                .on(assignee.userId.eq(userId))
//                .fetch();
//    }

//    // 내가 댓글을 남긴
//    public List<Issue> findByCommentUserId() {
//        return queryFactory
//                .selectFrom(issue)
//                .where(issue.comments.)
//    }


}

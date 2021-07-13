package com.issuetracker.domain.user;

import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import static com.issuetracker.domain.issue.QIssue.issue;
import static com.issuetracker.domain.user.QUser.user;

import java.util.List;

@RequiredArgsConstructor
public class CustomizedUserRepositoryImpl implements CustomizedUserRepository {

    private final JPAQueryFactory queryFactory;

    @Override
    public List<User> findAuthors() {
        return queryFactory
                .selectFrom(user)
                .where(user.id.in(
                        JPAExpressions
                                .select(issue.author.id)
                                .from(issue))
                ).fetch();
    }
}

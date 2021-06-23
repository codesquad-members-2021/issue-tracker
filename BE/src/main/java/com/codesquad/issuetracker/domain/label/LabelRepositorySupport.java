package com.codesquad.issuetracker.domain.label;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.codesquad.issuetracker.domain.label.QLabel.label;

@Repository
public class LabelRepositorySupport extends QuerydslRepositorySupport {

    private final JPAQueryFactory queryFactory;

    public LabelRepositorySupport(JPAQueryFactory queryFactory) {
        super(Label.class);
        this.queryFactory = queryFactory;
    }

    public List<Label> findByTitle(String title) {
        return queryFactory
                .selectFrom(label)
                .where(label.title.eq(title))
                .fetch();
    }
}

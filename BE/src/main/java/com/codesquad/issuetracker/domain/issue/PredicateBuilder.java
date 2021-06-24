package com.codesquad.issuetracker.domain.issue;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.BooleanPath;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.StringPath;

public class PredicateBuilder {

    private final BooleanExpression predicate;

    public PredicateBuilder(BooleanExpression predicate) {
        this.predicate = predicate;
    }

    public PredicateBuilder containsAnd(StringPath qValue, String rValue) {
        if (rValue != null) {
            return new PredicateBuilder(predicate.and(qValue.containsIgnoreCase(rValue)));
        }
        return this;
    }

    public PredicateBuilder isBooleanAnd(BooleanPath qValue, Boolean rValue) {
        if (rValue != null) {
            return (rValue) ? new PredicateBuilder(predicate.and(qValue.isTrue()))
                    : new PredicateBuilder(predicate.and(qValue.isFalse()));
        }
        return this;
    }

    public PredicateBuilder isLongEqualAnd(NumberPath qValue, Long rValue) {
        if (rValue != null) {
            return  new PredicateBuilder(predicate.and(qValue.eq(rValue)));
        }
        return this;
    }

    public BooleanExpression build() {
        return predicate;
    }

}
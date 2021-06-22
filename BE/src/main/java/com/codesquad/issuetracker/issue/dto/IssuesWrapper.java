package com.codesquad.issuetracker.issue.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class IssuesWrapper {
    private final List<IssueSummaryResponse> issues;

    public static IssuesWrapper wrap(List<IssueSummaryResponse> issues) {
        return new IssuesWrapper(issues);
    }
}

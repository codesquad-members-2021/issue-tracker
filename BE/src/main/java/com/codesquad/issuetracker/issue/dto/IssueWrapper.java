package com.codesquad.issuetracker.issue.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class IssueWrapper {

    private final IssueResponse issue;

    public static IssueWrapper wrap(IssueResponse issue) {
        return new IssueWrapper(issue);
    }
}

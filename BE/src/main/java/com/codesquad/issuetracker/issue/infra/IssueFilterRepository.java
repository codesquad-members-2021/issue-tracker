package com.codesquad.issuetracker.issue.infra;

import com.codesquad.issuetracker.issue.domain.Issue;
import com.codesquad.issuetracker.issue.dto.IssueFilter;

import java.util.List;

public interface IssueFilterRepository {
    List<Issue> findByIssueFilter(IssueFilter issueFilter);
}

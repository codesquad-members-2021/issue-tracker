package com.codesquad.issuetracker.issue.service;

import com.codesquad.issuetracker.issue.dto.IssueFilter;
import com.codesquad.issuetracker.issue.dto.IssueResponse;
import com.codesquad.issuetracker.issue.dto.IssueSummaryResponse;
import com.codesquad.issuetracker.issue.dto.IssuesWrapper;
import com.codesquad.issuetracker.issue.infra.IssueFilterRepository;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class IssueFilterService {

    private final IssueFilterRepository issueFilterRepository;

    public IssueFilterService(IssueFilterRepository issueFilterRepository) {
        this.issueFilterRepository = issueFilterRepository;
    }

    public IssuesWrapper filterIssues(IssueFilter issueFilter) {
        return IssuesWrapper.wrap(issueFilterRepository
                .findByIssueFilter(issueFilter)
                .stream()
                .map(IssueSummaryResponse::fromEntity)
                .collect(Collectors.toList()));
    }

}

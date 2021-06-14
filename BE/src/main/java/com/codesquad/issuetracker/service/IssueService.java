package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.Issue;
import com.codesquad.issuetracker.repository.IssueRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssueService {

    private final IssueRepository issueRepository;

    public IssueService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    public List<Issue> getOpenedIssues() {
        return issueRepository.getIssuesByStatusTrue();
    }

    public List<Issue> getClosedIssues() {
        return issueRepository.getIssuesByStatusFalse();
    }

}

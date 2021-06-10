package com.codesqaude.cocomarco.service;

import com.codesqaude.cocomarco.common.exception.NotFoundIssueException;
import com.codesqaude.cocomarco.domain.issue.IssueRepository;
import com.codesqaude.cocomarco.domain.issue.model.Issue;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class IssueService {

    private final IssueRepository issueRepository;

    public void write(Issue issue) {
        issueRepository.save(issue);
    }

    public Issue findById(Long issueId) {
        return issueRepository.findById(issueId).orElseThrow(NotFoundIssueException::new);
    }

}

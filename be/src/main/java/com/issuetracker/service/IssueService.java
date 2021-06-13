package com.issuetracker.service;

import com.issuetracker.controller.IssueDto;
import com.issuetracker.domain.Issue;
import com.issuetracker.repository.IssueRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssueService {

    private final IssueRepository issueRepository;

    public IssueService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    public List<IssueDto> getAllIssues() {
//        issueRepository.findAllIssues();
        return null;
    }
}

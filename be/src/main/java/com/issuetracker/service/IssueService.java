package com.issuetracker.service;

import com.issuetracker.dto.IssueDto;
import com.issuetracker.repository.IssueRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssueService {

    private final IssueRepository issueRepository;

    public IssueService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    public List<IssueDto> getAllIssues() {
        return issueRepository.findAllIssues().stream()
                .map(issue -> IssueDto.of(issue))
                .collect(Collectors.toList());
    }
}

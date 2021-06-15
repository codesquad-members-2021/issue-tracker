package com.issuetracker.service;

import com.issuetracker.dto.IssueDto;
import com.issuetracker.oauth.User;
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

    public List<IssueDto> getAllIssues(User user) {
        return issueRepository.findAllIssues().stream()
                .map(issue -> IssueDto.of(issue, user, issueRepository.findMilestoneTitleByIssueId(issue.getId()), issueRepository.findAllLabelsByIssueId(issue.getId())))
                .collect(Collectors.toList());
    }
}

package com.issuetracker.service;

import com.issuetracker.domain.Issue;
import com.issuetracker.dto.IssueDto;
import com.issuetracker.dto.IssueRequestDto;
import com.issuetracker.dto.ResponseStatusDto;
import com.issuetracker.oauth.User;
import com.issuetracker.repository.IssueRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssueService {

    Logger logger = LoggerFactory.getLogger(IssueService.class);

    private final IssueRepository issueRepository;

    public IssueService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    public List<IssueDto> getAllIssues(User user) {
        return issueRepository.findAllIssues().stream()
                .map(issue -> IssueDto.of(issue, user, issueRepository.findMilestoneTitleByIssueId(issue.getId()), issueRepository.findAllLabelsByIssueId(issue.getId())))
                .collect(Collectors.toList());
    }

    public ResponseStatusDto saveIssue(IssueRequestDto requestDto, User user) {
        int lastNumOfIssues = issueRepository.findAllIssues().size();

        Issue issueForSaving = new Issue();
        issueForSaving.setIssueFromDto(requestDto, user, (long) lastNumOfIssues);

        Long savedIssueId = issueRepository.simpleSave(issueForSaving);
        logger.info("id :{}", savedIssueId);

        for (Long labelId : requestDto.getLabelIds()) {
            issueRepository.saveForIssueHasLabels(savedIssueId, labelId);
        }

        return new ResponseStatusDto("success");
    }
}


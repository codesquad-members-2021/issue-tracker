package com.issuetracker.service;

import com.issuetracker.domain.Issue;
import com.issuetracker.dto.*;
import com.issuetracker.oauth.User;
import com.issuetracker.repository.IssueRepository;
import com.issuetracker.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssueService {

    Logger logger = LoggerFactory.getLogger(IssueService.class);

    private final IssueRepository issueRepository;
    private final UserRepository userRepository;

    public IssueService(IssueRepository issueRepository, UserRepository userRepository) {
        this.issueRepository = issueRepository;
        this.userRepository = userRepository;
    }

    public List<IssueDto> getAllIssues() {
        return issueRepository.findAllIssues().stream()
                .map(issue -> IssueDto.of(issue, issueRepository.findMilestoneTitleByIssueId(issue.getId()), issueRepository.findAllLabelsByIssueId(issue.getId()),
                        userRepository.findOneById(issue.getAuthorUserId()), userRepository.findOneById(issue.getAssignee())))
                .collect(Collectors.toList());
    }

    public ResponseStatusDto saveIssue(IssueRequestDto requestDto, User author) {
        int lastNumOfIssues = issueRepository.findAllIssues().size();

        Issue issueForSaving = new Issue();
        issueForSaving.setIssueFromDto(requestDto, author, (long) lastNumOfIssues);

        Long savedIssueId = issueRepository.simpleSave(issueForSaving);
        logger.info("id :{}", savedIssueId);

        for (Long labelId : requestDto.getLabelIds()) {
            issueRepository.saveForIssueHasLabels(savedIssueId, labelId);
        }

        return new ResponseStatusDto("success");
    }

    public List<IssueDto> searchIssuesByConditions(IssueSearchCondition searchCondition) {
        return issueRepository.findIssuesByConditions(searchCondition).stream()
                .map(issue -> IssueDto.of(issue, issueRepository.findMilestoneTitleByIssueId(issue.getId()), issueRepository.findAllLabelsByIssueId(issue.getId()),
                        userRepository.findOneById(issue.getAuthorUserId()), userRepository.findOneById(issue.getAssignee())))
                .collect(Collectors.toList());

    }

    public ResponseStatusDto editIssueByIssueId(Long id, IssueRequestDto issue) {
        issueRepository.editIssueByIssueId(id, issue);
        return new ResponseStatusDto("success");
    }
}


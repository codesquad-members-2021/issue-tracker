package com.issuetracker.service;

import com.issuetracker.domain.Issue;
import com.issuetracker.dto.*;
import com.issuetracker.oauth.User;
import com.issuetracker.oauth.UserDto;
import com.issuetracker.repository.CommentRepository;
import com.issuetracker.repository.IssueRepository;
import com.issuetracker.repository.MilestoneRepository;
import com.issuetracker.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import sun.rmi.runtime.Log;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssueService {

    Logger logger = LoggerFactory.getLogger(IssueService.class);

    private final IssueRepository issueRepository;
    private final UserRepository userRepository;
    private final MilestoneRepository milestoneRepository;
    private final CommentRepository commentRepository;

    public IssueService(IssueRepository issueRepository, UserRepository userRepository, MilestoneRepository milestoneRepository, CommentRepository commentRepository) {
        this.issueRepository = issueRepository;
        this.userRepository = userRepository;
        this.milestoneRepository = milestoneRepository;
        this.commentRepository = commentRepository;
    }

    //    public List<IssueDto> getAllIssues() {
//        return issueRepository.findAllIssues().stream()
//                .map(issue -> IssueDto.of(issue, issueRepository.findMilestoneTitleByIssueId(issue.getId()), issueRepository.findAllLabelsByIssueId(issue.getId()),
//                        userRepository.findOneById(issue.getAuthorUserId()), userRepository.findOneById(issue.getAssignee())))
//                .collect(Collectors.toList());
//    }

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
                .map(issue -> IssueDto.of(issue, findMilestoneTitleByIssue(issue), issueRepository.findAllLabelsByIssueId(issue.getId()),
                        findUserByIssue(issue.getAuthorUserId()), findUserByIssue(issue.getAssignee())))
                .collect(Collectors.toList());

    }

    public ResponseStatusDto editIssueByIssueId(Long id, IssueRequestDto issue) {
        issueRepository.editIssueByIssueId(id, issue);
        return new ResponseStatusDto("success");
    }

    public IssueDetailDto searchIssueDetailByIssueId(Long id) {
        Issue issue = issueRepository.findIssueByIssueId(id);

        MilestoneForIssueDetailDto milestoneDto = null;
        logger.info("마일스톤아이디: {}", issue.getMilestoneId());
        if (issue.getMilestoneId() != 0) {
            milestoneDto = MilestoneForIssueDetailDto.of(
                    milestoneRepository.findMilestoneByMilestoneId(issue.getMilestoneId()),
                    issueRepository.countOpenedIssuesByMilestoneId(issue.getMilestoneId()),
                    issueRepository.countClosedIssuesByMilestoneId(issue.getMilestoneId())
            );
        }


        List<LabelForIssueDetailDto> labelListDto = issueRepository.findAllLabelsByIssueId(id).stream()
                .map(LabelForIssueDetailDto::of)
                .collect(Collectors.toList());

        UserDto userDto = null;
        if (issue.getAssignee() != 0) {
            UserDto.of(userRepository.findOneById(issue.getAssignee()));
        }

        if (userDto == null) {
            return IssueDetailDto.of(issue, milestoneDto, labelListDto, commentRepository.count(issue.getId()));
        }

        return IssueDetailDto.of(issue, userDto, milestoneDto, labelListDto, commentRepository.count(issue.getId()));
    }

    public IssueCountDto searchNumberOfIssuesClosedAndOpened() {
        return new IssueCountDto(issueRepository.countAllOpenedIssues(), issueRepository.countAllClosedIssues());
    }

    private String findMilestoneTitleByIssue(Issue issue) {
        if (verifyMileStoneInIssue(issue)) {
            return issueRepository.findMilestoneTitleByIssueId(issue.getId());
        }

        return null;
    }

    private boolean verifyMileStoneInIssue(Issue issue) {
        logger.info("milestoneId : {}, ", issue.getMilestoneId());

        return issue.getMilestoneId() != 0;
    }

    private UserDto findUserByIssue(Long userId) {
        if (verifyUserInIssue(userId)) {
            return new UserDto(userRepository.findOneById(userId));
        }

        return null;
    }

    private boolean verifyUserInIssue(Long userId) {
        logger.info("userId : {}, ", userId);

        return userId != 0;
    }

}


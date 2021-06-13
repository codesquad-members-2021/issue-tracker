package com.codesqaude.cocomarco.service;

import com.codesqaude.cocomarco.common.exception.NotFoundIssueException;
import com.codesqaude.cocomarco.common.exception.NotFoundMilestoneException;
import com.codesqaude.cocomarco.domain.issue.IssueRepository;
import com.codesqaude.cocomarco.domain.issue.model.Assignment;
import com.codesqaude.cocomarco.domain.issue.model.Issue;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueRequest;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueStatusRequest;
import com.codesqaude.cocomarco.domain.milestone.Milestone;
import com.codesqaude.cocomarco.domain.milestone.MilestoneRepository;
import com.codesqaude.cocomarco.domain.user.User;
import com.codesqaude.cocomarco.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class IssueModifyService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());
    private final IssueRepository issueRepository;
    private final MilestoneRepository milestoneRepository;
    private final UserRepository userRepository;

    public void modifyTitle(Long issueId, IssueRequest issueRequest) {
        Issue issue = findById(issueId);
        issue.changeTitle(issueRequest.getTitle());
    }

    public void changeStatus(IssueStatusRequest issueStatusRequest) {
        List<Issue> issues = issueRepository.findAllById(issueStatusRequest.getIssues());
        for (Issue issue : issues) {
            issue.changeStatus(issueStatusRequest.getStatus());
        }
    }

    @Transactional
    public Issue findById(Long issueId) {
        return issueRepository.findById(issueId).orElseThrow(NotFoundIssueException::new);
    }

    public void changeMilestone(Long issueId, IssueRequest issueRequest) {
        Issue issue = findById(issueId);
        Milestone milestone = milestoneRepository.findById(issueRequest.getMilestone()).orElseThrow(NotFoundMilestoneException::new);
        issue.changeMilestone(milestone);
    }

    public void changeAssignments(Long issueId, IssueRequest issueRequest) {
        Issue issue = findById(issueId);
        List<User> assignees = userRepository.findAllById(issueRequest.getUserIds());
        List<Assignment> assignments = assignees.stream().map(Assignment::createAssignment).collect(Collectors.toList());

        issue.changeAssignment(assignments);
    }
}

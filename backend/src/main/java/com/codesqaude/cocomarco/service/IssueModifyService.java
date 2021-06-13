package com.codesqaude.cocomarco.service;

import com.codesqaude.cocomarco.common.exception.NotFoundIssueException;
import com.codesqaude.cocomarco.common.exception.NotFoundMilestoneException;
import com.codesqaude.cocomarco.domain.issue.IssueRepository;
import com.codesqaude.cocomarco.domain.issue.model.Issue;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueRequest;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueStatusRequest;
import com.codesqaude.cocomarco.domain.milestone.Milestone;
import com.codesqaude.cocomarco.domain.milestone.MilestoneRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class IssueModifyService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());
    private final IssueRepository issueRepository;
    private final MilestoneRepository milestoneRepository;

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

    public void modifyMilestone(Long issueId, IssueRequest issueRequest) {
        Issue issue = findById(issueId);
        Milestone milestone = milestoneRepository.findById(issueRequest.getMilestone()).orElseThrow(NotFoundMilestoneException::new);
        issue.changeMilestone(milestone);
    }
}

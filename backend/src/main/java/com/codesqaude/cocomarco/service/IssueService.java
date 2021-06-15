package com.codesqaude.cocomarco.service;

import com.codesqaude.cocomarco.common.exception.NotFoundIssueException;
import com.codesqaude.cocomarco.common.exception.NotFoundMilestoneException;
import com.codesqaude.cocomarco.common.exception.NotFoundUserException;
import com.codesqaude.cocomarco.domain.issue.IssueRepository;
import com.codesqaude.cocomarco.domain.issue.IssueSearchRepository;
import com.codesqaude.cocomarco.domain.issue.model.Assignment;
import com.codesqaude.cocomarco.domain.issue.model.Issue;
import com.codesqaude.cocomarco.domain.issue.model.IssueLabel;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueDetailResponse;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueListResponse;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueRequest;
import com.codesqaude.cocomarco.domain.issue.model.dto.IssueSearchRequest;
import com.codesqaude.cocomarco.domain.label.Label;
import com.codesqaude.cocomarco.domain.label.LabelRepository;
import com.codesqaude.cocomarco.domain.milestone.Milestone;
import com.codesqaude.cocomarco.domain.milestone.MilestoneRepository;
import com.codesqaude.cocomarco.domain.user.User;
import com.codesqaude.cocomarco.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class IssueService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());
    private final IssueRepository issueRepository;
    private final UserRepository userRepository;
    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;
    private final IssueSearchRepository issueSearchRepository;


    @Transactional
    public void create(IssueRequest issueRequest, UUID writerId) {
        User writer = userRepository.findById(writerId).orElseThrow(NotFoundUserException::new);
        List<User> assignees = userRepository.findAllById(issueRequest.getUserIds());
        List<Label> labels = labelRepository.findAllById(issueRequest.getLabels());
        Milestone milestone = milestoneRepository.findById(issueRequest.getMilestone()).orElseThrow(NotFoundMilestoneException::new);

        List<IssueLabel> issueLabels = labels.stream().map(IssueLabel::createIssueLabel).collect(Collectors.toList());
        List<Assignment> assignments = assignees.stream().map(Assignment::createAssignment).collect(Collectors.toList());

        Issue issue = Issue.createIssue(writer, issueRequest.getTitle(), issueRequest.getText(), assignments, issueLabels, milestone);

        issueRepository.save(issue);
    }

    public IssueDetailResponse showDetail(Long issueId) {
        Issue issue = issueRepository.findByIdFetch(issueId).orElseThrow(NotFoundIssueException::new);
        List<Label> labels = issue.getIssueLabels().stream().map(IssueLabel::getLabel).collect(Collectors.toList());
        List<User> assignments = issue.getAssignments().stream().map(Assignment::getUser).collect(Collectors.toList());

        return IssueDetailResponse.of(issue, assignments, labels);
    }

    public List<IssueListResponse> showList(IssueSearchRequest request) {
        List<Issue> issues = issueSearchRepository.searchByBuilder(request);
        List<IssueListResponse> issueListResponse = new ArrayList<>();

        for (Issue issue : issues) {
            List<Long> issueLabelIds = issue.getIssueLabels().stream().map(IssueLabel::getLabel).map(Label::getId).collect(Collectors.toList());
            List<Label> labels = labelRepository.findAllById(issueLabelIds);
            List<UUID> assignmentIds = issue.getAssignments().stream().map(Assignment::getUser).map(User::getId).collect(Collectors.toList());
            List<User> assignments = userRepository.findAllById(assignmentIds);

            issueListResponse.add(IssueListResponse.of(issue, assignments, labels));
        }


        return issueListResponse;
    }

    public Issue findById(Long issueId) {
        return issueRepository.findById(issueId).orElseThrow(NotFoundIssueException::new);
    }


}

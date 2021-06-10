package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team02.issue_tracker.domain.*;
import team02.issue_tracker.dto.issue.IssueRequest;
import team02.issue_tracker.dto.wrapping.DataResponse;
import team02.issue_tracker.dto.wrapping.ListDataResponse;
import team02.issue_tracker.dto.issue.DetailIssueResponse;
import team02.issue_tracker.dto.issue.IssueResponse;
import team02.issue_tracker.exception.IssueNotFoundException;
import team02.issue_tracker.exception.LabelNotFoundException;
import team02.issue_tracker.exception.MilestoneNotFoundException;
import team02.issue_tracker.exception.UserNotFoundException;
import team02.issue_tracker.repository.IssueRepository;
import team02.issue_tracker.repository.LabelRepository;
import team02.issue_tracker.repository.MilestoneRepository;
import team02.issue_tracker.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssueService {

    private final IssueRepository issueRepository;
    private final UserRepository userRepository;
    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;

    public IssueService(IssueRepository issueRepository, UserRepository userRepository, LabelRepository labelRepository, MilestoneRepository milestoneRepository) {
        this.issueRepository = issueRepository;
        this.userRepository = userRepository;
        this.labelRepository = labelRepository;
        this.milestoneRepository = milestoneRepository;
    }

    public ListDataResponse getAllIssueResponses() {
        List<IssueResponse> issueResponses = issueRepository.findAll().stream()
                .map(IssueResponse::new)
                .collect(Collectors.toList());

        return new ListDataResponse(issueResponses);
    }

    public DataResponse getDetailIssueResponse(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        DetailIssueResponse issueResponse = new DetailIssueResponse(issue);
        return new DataResponse(issueResponse);
    }

    @Transactional
    public void addIssue(IssueRequest issueRequest) {
        User writer = userRepository.findById(issueRequest.getUserId()).orElseThrow(UserNotFoundException::new);
        List<Label> labels = getLabels(issueRequest.getLabelIds());
        Milestone milestone = milestoneRepository.findById(issueRequest.getMilestoneId()).orElseThrow(MilestoneNotFoundException::new);
        List<User> assignees = getAssignees(issueRequest.getAssigneeIds());

        Issue issue = issueRequest.toIssue(writer, labels, milestone, assignees);
        issueRepository.save(issue);
    }

    private List<Label> getLabels(List<Long> labelIds) {
        List<Label> labels = new ArrayList<>();
        labelIds.stream()
                .map(labelId -> {
                    Label label = labelRepository.findById(labelId).orElseThrow(LabelNotFoundException::new);
                    labels.add(label);
                    return label;
                });
        return labels;
    }

    private List<User> getAssignees(List<Long> assigneeIds) {
        List<User> assignees = new ArrayList<>();
        assigneeIds.stream()
                .map(assigneeId -> {
                    User assignee = userRepository.findById(assigneeId).orElseThrow(UserNotFoundException::new);
                    assignees.add(assignee);
                    return assignee;
                });
        return assignees;
    }
}

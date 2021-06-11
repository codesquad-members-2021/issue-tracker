package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.*;
import team02.issue_tracker.dto.issue.IssueRequest;
import team02.issue_tracker.dto.wrapping.ApiResult;
import team02.issue_tracker.dto.issue.DetailIssueResponse;
import team02.issue_tracker.dto.issue.IssueResponse;
import team02.issue_tracker.exception.IssueNotFoundException;
import team02.issue_tracker.exception.LabelNotFoundException;
import team02.issue_tracker.exception.MilestoneNotFoundException;
import team02.issue_tracker.exception.UserNotFoundException;
import team02.issue_tracker.repository.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssueService {

    private final IssueRepository issueRepository;
    private final UserRepository userRepository;
    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;
    private final IssueLabelRepository issueLabelRepository;
    private final IssueAssigneeRepository issueAssigneeRepository;
    private final CommentRepository commentRepository;

    public IssueService(IssueRepository issueRepository, UserRepository userRepository, LabelRepository labelRepository,
                        MilestoneRepository milestoneRepository, IssueLabelRepository issueLabelRepository, IssueAssigneeRepository issueAssigneeRepository, CommentRepository commentRepository) {
        this.issueRepository = issueRepository;
        this.userRepository = userRepository;
        this.labelRepository = labelRepository;
        this.milestoneRepository = milestoneRepository;
        this.issueLabelRepository = issueLabelRepository;
        this.issueAssigneeRepository = issueAssigneeRepository;
        this.commentRepository = commentRepository;
    }

    public ApiResult<List<IssueResponse>> getAllIssueResponses() {
        List<IssueResponse> issueResponses = issueRepository.findAll().stream()
                .map(IssueResponse::new)
                .collect(Collectors.toList());

        return ApiResult.success(issueResponses);
    }

    public ApiResult getDetailIssueResponse(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        return ApiResult.success(new DetailIssueResponse(issue));
    }

    public ApiResult<String> addIssue(IssueRequest issueRequest) {
        User writer = userRepository.findById(issueRequest.getUserId()).orElseThrow(UserNotFoundException::new);
        Milestone milestone = milestoneRepository.findById(issueRequest.getMilestoneId()).orElseThrow(MilestoneNotFoundException::new);

        Issue issue = saveIssue(issueRequest, writer, milestone);
        saveComment(issueRequest, writer, issue);
        issueLabelRepository.saveAll(getIssueLabels(issue, issueRequest.getLabelIds()));
        issueAssigneeRepository.saveAll(getIssueAssignees(issue, issueRequest.getAssigneeIds()));

        return ApiResult.ok();
    }

    private Issue saveIssue(IssueRequest issueRequest, User writer, Milestone milestone) {
        Issue issue = issueRequest.toIssue(writer);
        issue.addMilestone(milestone);
        return issueRepository.save(issue);
    }

    private void saveComment(IssueRequest issueRequest, User writer, Issue issue) {
        Comment comment = issueRequest.toComment(writer);
        comment.addIssue(issue);
        commentRepository.save(comment);
    }

    private List<IssueLabel> getIssueLabels(Issue issue, List<Long> labelIds) {
        List<IssueLabel> issueLabels = new ArrayList<>();
        labelIds.stream()
                .forEach(labelId -> {
                    Label label = labelRepository.findById(labelId).orElseThrow(LabelNotFoundException::new);
                    issueLabels.add(new IssueLabel(issue, label));
                });

        return issueLabels;
    }

    private List<IssueAssignee> getIssueAssignees(Issue issue, List<Long> assigneeIds) {
        List<IssueAssignee> issueAssignees = new ArrayList<>();
        assigneeIds.stream()
                .forEach(assigneeId -> {
                    User assignee = userRepository.findById(assigneeId).orElseThrow(UserNotFoundException::new);
                    issueAssignees.add(new IssueAssignee(issue, assignee));
                });

        return issueAssignees;
    }
}

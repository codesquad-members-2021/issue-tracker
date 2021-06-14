package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.*;
import team02.issue_tracker.dto.CommentRequest;
import team02.issue_tracker.dto.issue.*;
import team02.issue_tracker.exception.IllegalIssueStatusException;
import team02.issue_tracker.exception.IssueNotFoundException;
import team02.issue_tracker.repository.IssueRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssueService {

    private final IssueRepository issueRepository;
    private final UserService userService;
    private final CommentService commentService;
    private final MilestoneService milestoneService;
    private final LabelService labelService;

    public IssueService(IssueRepository issueRepository, UserService userService,
                        CommentService commentService, MilestoneService milestoneService, LabelService labelService) {
        this.issueRepository = issueRepository;
        this.userService = userService;
        this.commentService = commentService;
        this.milestoneService = milestoneService;
        this.labelService = labelService;
    }

    /**
     * isDeleted = false 인 issue들만 반환
     */
    public List<IssueResponse> getAllIssueResponses() {
        List<IssueResponse> issueResponses = issueRepository.findAll().stream()
                .filter(issue -> !issue.isDeleted())
                .map(IssueResponse::new)
                .collect(Collectors.toList());

        return issueResponses;
    }

    public DetailIssueResponse getDetailIssueResponse(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        return new DetailIssueResponse(issue);
    }

    public void addIssue(IssueRequest issueRequest, Long userId) {
        User writer = userService.findOne(userId);

        Issue issue = makeIssue(issueRequest, writer);
        commentService.makeComment(issueRequest, writer, issue);
        labelService.makeIssueLabels(issue, issueRequest.getLabelIds());
        userService.makeIssueAssignees(issue, issueRequest.getAssigneeIds());
    }

    private Issue makeIssue(IssueRequest issueRequest, User writer) {
        Issue issue = issueRequest.toIssue(writer);
        Milestone milestone = milestoneService.getMilestone(issueRequest.getMilestoneId());
        issue.addMilestone(milestone);
        return issueRepository.save(issue);
    }

    public void closeIssues(IssueIdsRequest issueIdsRequest) {
        List<Issue> issues = issueIdsRequest.getIssueIds().stream()
                .map(issueId -> {
                    Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
                    validateDeleted(issue);
                    issue.close();
                    return issue;
                }).collect(Collectors.toList());

        issueRepository.saveAll(issues);
    }

    private void validateDeleted(Issue issue) {
        if (issue.isDeleted()) {
            throw new IllegalIssueStatusException("삭제된 이슈입니다.");
        }
    }

    public void openIssues(IssueIdsRequest issueIdsRequest) {
        List<Issue> issues = issueIdsRequest.getIssueIds().stream()
                .map(issueId -> {
                    Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
                    validateDeleted(issue);
                    issue.open();
                    return issue;
                }).collect(Collectors.toList());

        issueRepository.saveAll(issues);
    }

    public void modifyTitle(Long issueId, IssueTitleRequest issueRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        validateDeleted(issue);
        issue.replaceTitle(issueRequest.getTitle());
        issueRepository.save(issue);
    }

    public void modifyAssignees(Long issueId, IssueAssigneeIdsRequest issueAssigneeIdsRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        validateDeleted(issue);
        List<IssueAssignee> issueAssignees = userService.modifyIssueAssignees(issue, issueAssigneeIdsRequest);
        issue.replaceIssueAssignees(issueAssignees);
        issueRepository.save(issue);
    }

    public void modifyLabels(Long issueId, IssueLabelIdsRequest issueLabelIdsRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        validateDeleted(issue);
        List<IssueLabel> issueLabels = labelService.modifyIssueLabels(issue, issueLabelIdsRequest);
        issue.replaceIssueLabels(issueLabels);
        issueRepository.save(issue);
    }

    public void modifyMilestone(Long issueId, IssueMilestoneRequest issueMilestoneRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        validateDeleted(issue);
        Milestone milestone = milestoneService.getMilestone(issueMilestoneRequest.getMilestoneId());
        issue.replaceMilestone(milestone);
        issueRepository.save(issue);
    }

    public void addComment(Long issueId, Long userId, CommentRequest commentRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        validateDeleted(issue);
        User writer = userService.findOne(userId);

        Comment comment = commentRequest.toComment(writer);
        comment.addIssue(issue);
        commentService.save(comment);
    }
}

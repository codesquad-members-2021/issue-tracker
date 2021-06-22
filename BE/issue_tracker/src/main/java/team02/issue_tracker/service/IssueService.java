package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team02.issue_tracker.domain.*;
import team02.issue_tracker.dto.CommentRequest;
import team02.issue_tracker.dto.issue.*;
import team02.issue_tracker.exception.IssueNotFoundException;
import team02.issue_tracker.repository.IssueRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssueService {

    private static final Long EMPTY = 0L;

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

    public List<IssueResponse> getAllIssueResponses() {
        return issueRepository.findAll().stream()
                .map(IssueResponse::new)
                .collect(Collectors.toList());
    }

    public DetailIssueResponse getDetailIssueResponse(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);

        Long totalIssueCountInMilestone = getTotalIssueCountInMilestone(issue.getMilestone());
        Long openIssueCountInMilestone = getOpenIssueCountInMilestone(issue.getMilestone());

        return new DetailIssueResponse(issue, totalIssueCountInMilestone, openIssueCountInMilestone);
    }

    private Long getTotalIssueCountInMilestone(Milestone milestone) {
        if (milestone == null) {
            return EMPTY;
        }
        return issueRepository.countByMilestoneId(milestone.getId());
    }

    private Long getOpenIssueCountInMilestone(Milestone milestone) {
        if (milestone == null) {
            return EMPTY;
        }
        return issueRepository.countByMilestoneIdAndIsOpenTrue(milestone.getId());
    }

    @Transactional
    public void addIssue(IssueRequest issueRequest, Long userId) {
        User writer = userService.findOne(userId);
        Issue issue = issueRequest.toIssue(writer);

        Milestone milestone = milestoneService.getMilestone(issueRequest.getMilestoneId());
        issue.addMilestone(milestone);

        issue.addIssueLabels(labelService.makeIssueLabels(issue, issueRequest.getLabelIds()));

        issue.addIssueAssignees(userService.makeIssueAssignees(issue, issueRequest.getAssigneeIds()));

        Comment comment = commentService.makeComment(issueRequest, writer, issue);
        issue.addComment(comment);

        issueRepository.save(issue);
    }

    public void closeIssues(IssueIdsRequest issueIdsRequest) {
        List<Issue> issues = issueIdsRequest.getIssueIds().stream()
                .map(issueId -> {
                    Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
                    issue.close();
                    return issue;
                }).collect(Collectors.toList());

        issueRepository.saveAll(issues);
    }

    public void openIssues(IssueIdsRequest issueIdsRequest) {
        List<Issue> issues = issueIdsRequest.getIssueIds().stream()
                .map(issueId -> {
                    Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
                    issue.open();
                    return issue;
                }).collect(Collectors.toList());

        issueRepository.saveAll(issues);
    }

    public void modifyTitle(Long issueId, IssueTitleRequest issueRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        issue.editTitle(issueRequest.getTitle());
        issueRepository.save(issue);
    }

    @Transactional
    public void modifyAssignees(Long issueId, IssueAssigneeIdsRequest issueAssigneeIdsRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        List<IssueAssignee> issueAssignees = userService.modifyIssueAssignees(issue, issueAssigneeIdsRequest);
        issue.editIssueAssignees(issueAssignees);
    }

    @Transactional
    public void modifyLabels(Long issueId, IssueLabelIdsRequest issueLabelIdsRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        List<IssueLabel> issueLabels = labelService.modifyIssueLabels(issue, issueLabelIdsRequest);
        issue.editIssueLabels(issueLabels);
    }

    public void modifyMilestone(Long issueId, IssueMilestoneRequest issueMilestoneRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        Milestone milestone = milestoneService.getMilestone(issueMilestoneRequest.getMilestoneId());
        issue.editMilestone(milestone);
        issueRepository.save(issue);
    }

    public void addComment(Long issueId, Long userId, CommentRequest commentRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        User writer = userService.findOne(userId);

        Comment comment = commentRequest.toComment(writer);
        comment.addIssue(issue);
        commentService.save(comment);
    }

    public void deleteIssue(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        issueRepository.delete(issue);
    }

    public IssueCountResponse getIssueCount() {
        Long openIssueCount = getOpenIssueCount();
        Long closedIssueCount = getClosedIssueCount();
        return new IssueCountResponse(openIssueCount, closedIssueCount);
    }

    public Long getOpenIssueCount() {
        return issueRepository.countByIsOpenTrue();
    }

    public Long getClosedIssueCount() {
        return issueRepository.countByIsOpenFalse();
    }
}

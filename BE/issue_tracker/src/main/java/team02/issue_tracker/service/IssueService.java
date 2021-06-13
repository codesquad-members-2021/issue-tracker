package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.*;
import team02.issue_tracker.dto.issue.*;
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

    public List<IssueResponse> getAllIssueResponses() {
        List<IssueResponse> issueResponses = issueRepository.findAll().stream()
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
        Milestone milestone = milestoneService.findOne(issueRequest.getMilestoneId());

        Issue issue = save(issueRequest, writer, milestone);
        commentService.save(issueRequest, writer, issue);
        labelService.makeIssueLabels(issue, issueRequest.getLabelIds());
        userService.makeIssueAssignees(issue, issueRequest.getAssigneeIds());
    }

    private Issue save(IssueRequest issueRequest, User writer, Milestone milestone) {
        Issue issue = issueRequest.toIssue(writer);
        issue.addMilestone(milestone);
        return issueRepository.save(issue);
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
        issue.replaceTitle(issueRequest.getTitle());
        issueRepository.save(issue);
    }

    public void modifyAssignees(Long issueId, IssueAssigneeIdsRequest issueAssigneeIdsRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        List<IssueAssignee> issueAssignees = userService.modifyIssueAssignees(issue, issueAssigneeIdsRequest);
        issue.replaceIssueAssignees(issueAssignees);
        issueRepository.save(issue);
    }

    public void modifyLabels(Long issueId, IssueLabelIdsRequest issueLabelIdsRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        List<IssueLabel> issueLabels = labelService.modifyIssueLabels(issue, issueLabelIdsRequest);
        issue.replaceIssueLabels(issueLabels);
        issueRepository.save(issue);
    }

    public void modifyMilestone(Long issueId, IssueMilestoneRequest issueMilestoneRequest) {
        // Todo: milestone 없애는걸로 변경하려면 0으로 request 받도록 해야하나..?
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        Milestone milestone = milestoneService.findOne(issueMilestoneRequest.getMilestoneId());
        issue.replaceMilestone(milestone);
        issueRepository.save(issue);
    }
}

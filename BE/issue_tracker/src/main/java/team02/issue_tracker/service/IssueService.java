package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.*;
import team02.issue_tracker.dto.CommentRequest;
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

    /**
     * isDeleted = false 인 issue들만 반환
     */
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

    public void modifyAssignees(Long issueId, IssueAssigneeIdsRequest issueAssigneeIdsRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        List<IssueAssignee> issueAssignees = userService.modifyIssueAssignees(issue, issueAssigneeIdsRequest);
        issue.editIssueAssignees(issueAssignees);
        issueRepository.save(issue);
    }

    public void modifyLabels(Long issueId, IssueLabelIdsRequest issueLabelIdsRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        List<IssueLabel> issueLabels = labelService.modifyIssueLabels(issue, issueLabelIdsRequest);
        issue.editIssueLabels(issueLabels);
        issueRepository.save(issue);
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

    /**
     * Issue 삭제시 Comment도 삭제됨
     */
    public void deleteIssue(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
        issue.delete();
        issueRepository.save(issue);

        List<Comment> comments = issue.getComments().stream()
                .map(comment -> {
                    comment.delete();
                    commentService.deleteCommentEmojis(comment.getId());
                    return comment;
                }).collect(Collectors.toList());
        commentService.saveAll(comments);

        userService.deleteIssueAssignees(issue);
        labelService.deleteIssueLabels(issue);
    }
}

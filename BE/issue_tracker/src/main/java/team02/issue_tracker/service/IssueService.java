package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.Milestone;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.dto.issue.DetailIssueResponse;
import team02.issue_tracker.dto.issue.IssueRequest;
import team02.issue_tracker.dto.issue.IssueResponse;
import team02.issue_tracker.dto.wrapping.ApiResult;
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

    public ApiResult<String> addIssue(IssueRequest issueRequest, Long userId) {
        User writer = userService.findOne(userId);
        Milestone milestone = milestoneService.findOne(issueRequest);

        Issue issue = save(issueRequest, writer, milestone);
        commentService.save(issueRequest, writer, issue);
        labelService.makeIssueLabels(issue, issueRequest);
        userService.makeIssueAssignees(issue, issueRequest);

        return ApiResult.ok();
    }

    private Issue save(IssueRequest issueRequest, User writer, Milestone milestone) {
        Issue issue = issueRequest.toIssue(writer);
        issue.addMilestone(milestone);
        return issueRepository.save(issue);
    }
}

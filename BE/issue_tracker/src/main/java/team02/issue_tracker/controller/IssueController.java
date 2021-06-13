package team02.issue_tracker.controller;

import org.springframework.web.bind.annotation.*;
import team02.issue_tracker.dto.issue.*;
import team02.issue_tracker.dto.wrapping.ApiResult;
import team02.issue_tracker.oauth.annotation.LoginRequired;
import team02.issue_tracker.oauth.annotation.UserId;
import team02.issue_tracker.service.IssueService;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
public class IssueController {

    private final IssueService issueService;

    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    @GetMapping
    public ApiResult<List<IssueResponse>> showAllIssues() {
        return ApiResult.success(issueService.getAllIssueResponses());
    }

    @GetMapping("/{issueId}")
    public ApiResult<DetailIssueResponse> showDetailIssue(@PathVariable Long issueId) {
        return ApiResult.success(issueService.getDetailIssueResponse(issueId));
    }

    @LoginRequired
    @PostMapping
    public ApiResult<String> createIssue(@RequestBody IssueRequest issueRequest, @UserId Long userId) {
        issueService.addIssue(issueRequest, userId);
        return ApiResult.ok();
    }

    @PostMapping("/close")
    public ApiResult<String> closeIssues(@RequestBody IssueIdsRequest issueIdsRequest) {
        issueService.closeIssues(issueIdsRequest);
        return ApiResult.ok();
    }

    @PostMapping("/open")
    public ApiResult<String> openIssues(@RequestBody IssueIdsRequest issueIdsRequest) {
        issueService.openIssues(issueIdsRequest);
        return ApiResult.ok();
    }

    @PatchMapping("/{issueId}/title")
    public ApiResult<String> modifyTitle(@PathVariable Long issueId, @RequestBody IssueTitleRequest issueTitleRequest) {
        issueService.modifyTitle(issueId, issueTitleRequest);
        return ApiResult.ok();
    }

    @PatchMapping("/{issueId}/assignees")
    public ApiResult<String> modifyAssignees(@PathVariable Long issueId, @RequestBody IssueAssigneeIdsRequest issueAssigneeIdsRequest) {
        issueService.modifyAssignees(issueId, issueAssigneeIdsRequest);
        return ApiResult.ok();
    }

    @PatchMapping("/{issueId}/labels")
    public ApiResult<String> modifyLabels(@PathVariable Long issueId, @RequestBody IssueLabelIdsRequest issueLabelIdsRequest) {
        issueService.modifyLabels(issueId, issueLabelIdsRequest);
        return ApiResult.ok();
    }

    @PatchMapping("/{issueId}/milestone")
    public ApiResult<String> modifyMilestone(@PathVariable Long issueId, @RequestBody IssueMilestoneRequest  issueMilestoneRequest) {
        issueService.modifyMilestone(issueId, issueMilestoneRequest);
        return ApiResult.ok();
    }

}

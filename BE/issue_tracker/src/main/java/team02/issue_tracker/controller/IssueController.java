package team02.issue_tracker.controller;

import org.springframework.web.bind.annotation.*;
import team02.issue_tracker.dto.issue.DetailIssueResponse;
import team02.issue_tracker.dto.issue.IssueIdsRequest;
import team02.issue_tracker.dto.issue.IssueRequest;
import team02.issue_tracker.dto.issue.IssueResponse;
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
    public ApiResult<String> closeIssues(@RequestBody IssueIdsRequest issueRequest) {
        issueService.closeIssues(issueRequest);
        return ApiResult.ok();
    }

    @PostMapping("/open")
    public ApiResult<String> openIssues(@RequestBody IssueIdsRequest issueRequest) {
        issueService.openIssues(issueRequest);
        return ApiResult.ok();
    }
}

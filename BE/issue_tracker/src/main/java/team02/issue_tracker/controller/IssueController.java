package team02.issue_tracker.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import team02.issue_tracker.dto.CommentRequest;
import team02.issue_tracker.dto.issue.*;
import team02.issue_tracker.dto.wrapping.ApiResult;
import team02.issue_tracker.oauth.annotation.LoginRequired;
import team02.issue_tracker.oauth.annotation.UserId;
import team02.issue_tracker.service.IssueService;

import java.util.List;

@Api(tags = {"이슈 관련 API"}, description = "이슈 등록, 조회 등 가능합니다.")
@Slf4j
@RestController
@RequestMapping("/api/issues")
public class IssueController {

    private final IssueService issueService;

    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    @ApiOperation(value = "전체 이슈 조회", notes = "등록된 모든 이슈를 조회합니다.")
    @GetMapping
    public ApiResult<List<IssueResponse>> showAllIssues() {
        return ApiResult.success(issueService.getAllIssueResponses());
    }

    @GetMapping("/{issueId}")
    public ApiResult<DetailIssueResponse> showDetailIssue(@PathVariable Long issueId) {
        return ApiResult.success(issueService.getDetailIssueResponse(issueId));
    }

    @GetMapping("/count")
    public ApiResult<IssueCountResponse> showIssueCount() {
        return ApiResult.success(issueService.getIssueCount());
    }

    @LoginRequired
    @PostMapping
    public ApiResult<String> createIssue(@RequestBody IssueRequest issueRequest, @UserId Long userId) {
        log.info("user id: {}", userId);
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
    public ApiResult<String> modifyMilestone(@PathVariable Long issueId, @RequestBody IssueMilestoneRequest issueMilestoneRequest) {
        issueService.modifyMilestone(issueId, issueMilestoneRequest);
        return ApiResult.ok();
    }

    @DeleteMapping("/{issueId}")
    public ApiResult<String> deleteIssue(@PathVariable Long issueId) {
        issueService.deleteIssue(issueId);
        return ApiResult.ok();
    }

    @LoginRequired
    @PostMapping("/{issueId}/comments")
    public ApiResult<String> createComment(@PathVariable Long issueId, @RequestBody CommentRequest commentRequest, @UserId Long userId) {
        log.info("user id: {}", userId);
        issueService.addComment(issueId, userId, commentRequest);
        return ApiResult.ok();
    }

    @LoginRequired
    @GetMapping(params = {"is_open", "filter", "assignee", "label", "milestone", "writer"})
    public ApiResult<List<IssueResponse>> searchIssues(@UserId Long userId, @RequestParam("is_open") Boolean isOpen, String filter,
                                                       @RequestParam("assignee") Long assigneeId, @RequestParam("label") Long labelId,
                                                       @RequestParam("milestone") Long milestoneId, @RequestParam("writer") Long writerId) {

        List<IssueResponse> issueResponses = issueService.getFilteredIssues(userId, isOpen, filter, assigneeId, labelId, milestoneId, writerId);
        return ApiResult.success(issueResponses);
    }
}

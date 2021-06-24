package team02.issue_tracker.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;
import team02.issue_tracker.dto.CommentRequest;
import team02.issue_tracker.dto.issue.*;
import team02.issue_tracker.dto.wrapping.ApiResult;
import team02.issue_tracker.oauth.annotation.LoginRequired;
import team02.issue_tracker.oauth.annotation.UserId;
import team02.issue_tracker.service.IssueService;

import java.util.List;

@Api(tags = {"이슈 관련 API"}, description = "이슈 등록, 조회, 수정, 삭제 가능합니다.")
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

    @ApiOperation(value = "이슈 필터링 조회", notes = "이슈를 조건에 맞게 필터링하여 조회합니다. (로그인 필수)")
    @LoginRequired
    @GetMapping(params = {"is_open", "filter", "assignee", "label", "milestone", "writer"})
    public ApiResult<List<IssueResponse>> searchIssues(@UserId Long userId, @RequestParam("is_open") @Nullable Boolean isOpen, @Nullable String filter,
                                                       @RequestParam("assignee") @Nullable Long assigneeId, @RequestParam("label") @Nullable Long labelId,
                                                       @RequestParam("milestone") @Nullable Long milestoneId, @RequestParam("writer") @Nullable Long writerId) {

        List<IssueResponse> issueResponses = issueService.getFilteredIssues(userId, isOpen, filter, assigneeId, labelId, milestoneId, writerId);
        return ApiResult.success(issueResponses);
    }

    @ApiOperation(value = "이슈 개별 조회", notes = "개별 이슈를 상세 조회합니다.")
    @GetMapping("/{issueId}")
    public ApiResult<DetailIssueResponse> showDetailIssue(@PathVariable Long issueId) {
        return ApiResult.success(issueService.getDetailIssueResponse(issueId));
    }

    @ApiOperation(value = "이슈 개수 조회", notes = "이슈 개수를 조회합니다.")
    @GetMapping("/count")
    public ApiResult<IssueCountResponse> showIssueCount() {
        return ApiResult.success(issueService.getIssueCount());
    }

    @ApiOperation(value = "이슈 등록", notes = "새로운 이슈를 등록합니다. (로그인 필수)")
    @LoginRequired
    @PostMapping
    public ApiResult<String> createIssue(@RequestBody IssueRequest issueRequest, @UserId Long userId) {
        log.info("user id: {}", userId);
        issueService.addIssue(issueRequest, userId);
        return ApiResult.ok();
    }

    @ApiOperation(value = "선택한 이슈 닫기", notes = "선택한 이슈를 닫습니다.")
    @PostMapping("/close")
    public ApiResult<String> closeIssues(@RequestBody IssueIdsRequest issueIdsRequest) {
        issueService.closeIssues(issueIdsRequest);
        return ApiResult.ok();
    }

    @ApiOperation(value = "선택한 이슈 열기", notes = "선택한 이슈를 엽니다.")
    @PostMapping("/open")
    public ApiResult<String> openIssues(@RequestBody IssueIdsRequest issueIdsRequest) {
        issueService.openIssues(issueIdsRequest);
        return ApiResult.ok();
    }

    @ApiOperation(value = "이슈 제목 수정", notes = "이슈의 제목을 수정합니다.")
    @PatchMapping("/{issueId}/title")
    public ApiResult<String> modifyTitle(@PathVariable Long issueId, @RequestBody IssueTitleRequest issueTitleRequest) {
        issueService.modifyTitle(issueId, issueTitleRequest);
        return ApiResult.ok();
    }

    @ApiOperation(value = "이슈 담당자 수정", notes = "이슈의 담당자를 수정합니다.")
    @PatchMapping("/{issueId}/assignees")
    public ApiResult<String> modifyAssignees(@PathVariable Long issueId, @RequestBody IssueAssigneeIdsRequest issueAssigneeIdsRequest) {
        issueService.modifyAssignees(issueId, issueAssigneeIdsRequest);
        return ApiResult.ok();
    }

    @ApiOperation(value = "이슈 레이블 수정", notes = "이슈의 레이블을 수정합니다.")
    @PatchMapping("/{issueId}/labels")
    public ApiResult<String> modifyLabels(@PathVariable Long issueId, @RequestBody IssueLabelIdsRequest issueLabelIdsRequest) {
        issueService.modifyLabels(issueId, issueLabelIdsRequest);
        return ApiResult.ok();
    }

    @ApiOperation(value = "이슈 마일스톤 수정", notes = "이슈의 마일스톤을 수정합니다.")
    @PatchMapping("/{issueId}/milestone")
    public ApiResult<String> modifyMilestone(@PathVariable Long issueId, @RequestBody IssueMilestoneRequest issueMilestoneRequest) {
        issueService.modifyMilestone(issueId, issueMilestoneRequest);
        return ApiResult.ok();
    }

    @ApiOperation(value = "이슈 삭제", notes = "이슈를 삭제합니다.")
    @DeleteMapping("/{issueId}")
    public ApiResult<String> deleteIssue(@PathVariable Long issueId) {
        issueService.deleteIssue(issueId);
        return ApiResult.ok();
    }

    @ApiOperation(value = "이슈 코멘트 추가", notes = "이슈에 코멘트를 추가합니다. (로그인 필수)")
    @LoginRequired
    @PostMapping("/{issueId}/comments")
    public ApiResult<String> createComment(@PathVariable Long issueId, @RequestBody CommentRequest commentRequest, @UserId Long userId) {
        log.info("user id: {}", userId);
        issueService.addComment(issueId, userId, commentRequest);
        return ApiResult.ok();
    }
}

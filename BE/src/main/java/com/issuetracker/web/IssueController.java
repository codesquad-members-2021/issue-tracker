package com.issuetracker.web;

import com.issuetracker.auth.annotation.LoginRequired;
import com.issuetracker.service.IssueCommandService;
import com.issuetracker.service.IssueQueryService;
import com.issuetracker.web.dto.reqeust.*;
import com.issuetracker.web.dto.response.*;
import com.issuetracker.auth.annotation.UserId;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/issues")
@RequiredArgsConstructor
public class IssueController {

    private final IssueQueryService issueQueryService;
    private final IssueCommandService issueCommandService;
    private final Logger logger = LoggerFactory.getLogger(IssueController.class);

    @GetMapping("/search")
    public IssuesResponseDTO search(SearchRequestDTO searchRequest, @PageableDefault(size = 6, sort = "createdDateTime", direction = Sort.Direction.DESC) Pageable pageable) {
        logger.debug("검색어와 상태에 따른 이슈 조회");
        return issueQueryService.searchIssues(searchRequest, pageable);
    }

    @GetMapping
    public IssuesResponseDTO view(FilterRequestDTO filterRequest, @PageableDefault(size = 6, sort = "createdDateTime", direction = Sort.Direction.DESC) Pageable pageable) {
        logger.debug("모든 이슈 조회");
        return issueQueryService.filterIssues(filterRequest, pageable);
    }

    @LoginRequired
    @PatchMapping
    public void changeStatus(@RequestBody IssueNumbersRequestDTO issueNumbersRequestDTO, @RequestParam String status) {
        logger.debug("이슈 닫기 or 열기");
        issueCommandService.changeIssueStatus(issueNumbersRequestDTO, status);
    }

    @LoginRequired
    @GetMapping("/form")
    public IssueFormResponseDTO viewForm() {
        logger.debug("이슈 생성 페이지 요청");
        return issueQueryService.getIssueForm();
    }

    @LoginRequired
    @PostMapping("/form")
    public IssueNumberResponseDTO create(@UserId Long userId, @RequestBody IssueRequestDTO issueRequestDTO) {
        logger.debug("이슈 생성");
        return issueCommandService.createIssue(issueRequestDTO, userId);
    }

    @LoginRequired
    @GetMapping("/{issueId}")
    public IssueDetailPageResponseDTO viewDetailPage(@PathVariable Long issueId, @UserId Long userId) {
        logger.debug("이슈 상세 페이지");
        return issueQueryService.getDetailPage(issueId, userId);
    }

    @LoginRequired
    @PatchMapping("/{issueId}/title")
    public IssueTitleDTO updateTitle(@PathVariable Long issueId, @RequestBody IssueTitleDTO issueTitleDTO) {
        logger.debug("이슈 제목 수정");
        return issueCommandService.updateIssueTitle(issueId, issueTitleDTO);
    }

    @LoginRequired
    @GetMapping("/{issueId}/assignees")
    public AssigneesResponseDTO viewAssignees(@PathVariable Long issueId) {
        logger.debug("이슈의 담당자 가져오기");
        return issueQueryService.getAssignees(issueId);
    }

    @LoginRequired
    @PatchMapping("/{issueId}/assignees")
    public void updateAssignees(@PathVariable Long issueId, @RequestBody AssigneesToUpdateRequestDTO updateAssigneesRequestDTO) {
        logger.debug("이슈의 담당자 편집");
        issueCommandService.updateAssignees(issueId, updateAssigneesRequestDTO);
    }

    @LoginRequired
    @GetMapping("/{issueId}/labels")
    public LabelsInIssueResponseDTO viewLabels(@PathVariable Long issueId) {
        logger.debug("이슈의 레이블 가져오기");
        return issueQueryService.getLabels(issueId);
    }

    @LoginRequired
    @PatchMapping("/{issueId}/labels")
    public void updateLabels(@PathVariable Long issueId, @RequestBody LabelsToUpdateRequestDTO labelsToUpdateRequestDTO) {
        logger.debug("이슈의 레이블 편집");
        issueCommandService.updateLabels(issueId, labelsToUpdateRequestDTO);
    }

    @LoginRequired
    @GetMapping("/{issueId}/milestones")
    public MilestonesInIssueResponseDTO getMilestones(@PathVariable Long issueId) {
        logger.debug("이슈의 마일스톤 가져오기");
        return issueQueryService.getMilestones(issueId);
    }

    @LoginRequired
    @PatchMapping("/{issueId}/milestones")
    public void updateMilestone(@PathVariable Long issueId, @RequestBody MilestoneToUpdateRequestDTO milestonesToUpdateRequestDTO) {
        logger.debug("이슈의 마일스톤 편집");
        issueCommandService.updateMilestone(issueId, milestonesToUpdateRequestDTO);
    }

    @LoginRequired
    @PostMapping("/{issueId}/comments")
    public CommentDTO createComment(@UserId Long userId, @PathVariable Long issueId, @RequestBody CommentDTO comment) {
        logger.debug("이슈의 코멘트 생성");
        return issueCommandService.createComment(userId, issueId, comment);
    }

    @LoginRequired
    @PatchMapping("/{issueId}/comments")
    public void updateComment(@UserId Long userId, @PathVariable Long issueId, @RequestBody CommentDTO comment) {
        logger.debug("이슈의 코멘트 편집");
        issueCommandService.updateComment(userId, issueId, comment);
    }

    @LoginRequired
    @DeleteMapping("/{issueId}/comments/{commentId}")
    public void deleteComment(@UserId Long userId, @PathVariable Long issueId, @PathVariable Long commentId) {
        logger.debug("이슈의 코멘트 삭제");
        issueCommandService.deleteComment(userId, issueId, commentId);
    }
}

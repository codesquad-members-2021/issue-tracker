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
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/issues")
@RequiredArgsConstructor
public class IssueController {

    private final IssueQueryService issueQueryService;
    private final IssueCommandService issueCommandService;
    private final Logger logger = LoggerFactory.getLogger(IssueController.class);

    @GetMapping
    public IssuesResponseDTO search(SearchRequestDTO searchRequest) {
        logger.debug("검색어에 따른 이슈 조회");
        return issueQueryService.searchIssues(searchRequest);
    }

    @GetMapping
    public IssuesResponseDTO view(FilterRequestDTO filterRequest) {
        logger.debug("모든 이슈 조회");
        return issueQueryService.filterIssues(filterRequest);
    }

    @PatchMapping
    public void changeStatus(@RequestBody IssueNumbersRequestDTO issueNumbersRequestDTO, @RequestParam String status) {
        logger.debug("이슈 닫기 or 열기");
        logger.debug("issue 상태 변경 확인: {}", issueNumbersRequestDTO.toString());
        issueCommandService.changeIssueStatus(issueNumbersRequestDTO, status);
    }

    @GetMapping("/form")
    public IssueFormResponseDTO viewForm() {
        logger.debug("이슈 생성 페이지 요청");
        return issueQueryService.getIssueForm();
    }

    @LoginRequired
    @PostMapping("/form")
    public IssueNumberResponseDTO create(@RequestBody IssueRequestDTO issueRequestDTO, @UserId Long userId) {
        logger.debug("이슈 생성");
        logger.debug("issue 요청 확인: {}", issueRequestDTO.toString());
        return issueCommandService.createIssue(issueRequestDTO, userId);
    }

    @LoginRequired
    @GetMapping("/{issueId}")
    public IssueDetailPageResponseDTO viewDetailPage(@PathVariable Long issueId, @UserId Long userId) {
        logger.debug("이슈 상세 페이지");
        return issueQueryService.getDetailPage(issueId, userId);
    }

    @PatchMapping("/{issueId}/title")
    public IssueTitleDTO updateTitle(@PathVariable Long issueId, @RequestBody IssueTitleDTO issueTitleDTO) {
        logger.debug("이슈 제목 수정");
        logger.debug("issue 제목 수정 요청 확인: {}", issueTitleDTO.toString());
        return issueCommandService.updateIssueTitle(issueId, issueTitleDTO);
    }

    @GetMapping("/{issueId}/assignees")
    public AssigneesResponseDTO viewAssignees(@PathVariable Long issueId) {
        logger.debug("이슈의 담당자 가져오기");
        return issueQueryService.getAssignees(issueId);
    }

    @PatchMapping("/{issueId}/assignees")
    public void updateAssignees(@PathVariable Long issueId, @RequestBody AssigneesToUpdateRequestDTO updateAssigneesRequestDTO) {
        logger.debug("이슈의 담당자 편집");
        logger.debug("이슈의 담당자 편집 요청 확인: {}", updateAssigneesRequestDTO.toString());
        issueCommandService.updateAssignees(issueId, updateAssigneesRequestDTO);
    }

    @GetMapping("/{issueId}/labels")
    public LabelsInIssueResponseDTO viewLabels(@PathVariable Long issueId) {
        logger.debug("이슈의 레이블 가져오기");
        return issueQueryService.getLabels(issueId);
    }

    @PatchMapping("/{issueId}/labels")
    public void updateLabels(@PathVariable Long issueId, @RequestBody LabelsToUpdateRequestDTO labelsToUpdateRequestDTO) {
        logger.debug("이슈의 레이블 편집");
        logger.debug("이슈의 레이블 편집 요청 확인: {}", labelsToUpdateRequestDTO.toString());
        issueCommandService.updateLabels(issueId, labelsToUpdateRequestDTO);
    }

    @GetMapping("/{issueId}/milestones")
    public MilestonesInIssueResponseDTO getMilestones(@PathVariable Long issueId) {
        logger.debug("이슈의 마일스톤 가져오기");
        return issueQueryService.getMilestones(issueId);
    }

    @PatchMapping("/{issueId}/milestones")
    public void updateMilestones(@PathVariable Long issueId, @RequestBody MilestoneToUpdateRequestDTO milestonesToUpdateRequestDTO) {
        logger.debug("이슈의 마일스톤 편집");
        logger.debug("이슈의 마일스톤 편집 요청 확인: {}", milestonesToUpdateRequestDTO.toString());
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

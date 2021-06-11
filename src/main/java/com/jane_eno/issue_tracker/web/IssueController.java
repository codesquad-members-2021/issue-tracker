package com.jane_eno.issue_tracker.web;

import com.jane_eno.issue_tracker.auth.annotation.LoginRequired;
import com.jane_eno.issue_tracker.auth.annotation.UserId;
import com.jane_eno.issue_tracker.service.IssueService;
import com.jane_eno.issue_tracker.web.dto.reqeust.*;
import com.jane_eno.issue_tracker.web.dto.response.*;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/issues")
@RequiredArgsConstructor
public class IssueController {

    private final IssueService issueService;
    private final Logger logger = LoggerFactory.getLogger(IssueController.class);

    @GetMapping
    public IssuesResponseDTO view(@RequestParam String status) {
        logger.debug("모든 이슈 조회");
        return issueService.getIssues(status);
    }

    @PatchMapping
    public void changeStatus(@RequestBody IssueNumbersRequestDTO issueNumbersRequestDTO, @RequestParam String status) {
        logger.debug("이슈 닫기 or 열기");
        logger.debug("issue 상태 변경 확인: {}", issueNumbersRequestDTO.toString());
        issueService.changeIssueStatus(issueNumbersRequestDTO, status);
    }

    @GetMapping("/form")
    public IssueFormResponseDTO viewForm() {
        logger.debug("이슈 생성 페이지 요청");
        return issueService.getIssueForm();
    }

    @LoginRequired
    @PostMapping("/form")
    public void create(@RequestBody IssueRequestDTO issueRequestDTO, @UserId Long userId) {
        logger.debug("이슈 생성");
        logger.debug("issue 요청 확인: {}", issueRequestDTO.toString());
        issueService.createIssue(issueRequestDTO, userId);
    }

    @LoginRequired
    @GetMapping("/{issueId}")
    public IssueDetailPageResponseDTO viewDetailPage(@PathVariable Long issueId, @UserId Long userId) {
        logger.debug("이슈 상세 페이지");
        return issueService.getDetailPage(issueId, userId);
    }

    @PatchMapping("/{issueId}/title")
    public void updateTitle(@PathVariable Long issueId, @RequestBody IssueTitleDTO issueTitleDTO) {
        logger.debug("이슈 제목 수정");
        logger.debug("issue 제목 수정 요청 확인: {}", issueTitleDTO.toString());
        issueService.updateIssueTitle(issueId, issueTitleDTO);
    }

    @GetMapping("/{issueId}/assignees")
    public AssigneesResponseDTO viewAssignees(@PathVariable Long issueId) {
        logger.debug("이슈의 담당자 가져오기");
        return issueService.getAssignees(issueId);
    }

    @PatchMapping("/{issueId}/assignees")
    public void updateAssignees(@PathVariable Long issueId, @RequestBody AssigneesToUpdateRequestDTO updateAssigneesRequestDTO) {
        logger.debug("이슈의 담당자 편집");
        logger.debug("이슈의 단당자 편집 요청 확인: {}", updateAssigneesRequestDTO.toString());
        issueService.updateAssignees(issueId, updateAssigneesRequestDTO);
    }

    @GetMapping("/{issueId}/labels")
    public LabelsInIssueResponseDTO viewLabels(@PathVariable Long issueId) {
        logger.debug("이슈의 레이블 가져오기");
        return issueService.getLabels(issueId);
    }

    @PatchMapping("/{issueId}/labels")
    public void updateLabels(@PathVariable Long issueId, @RequestBody LabelsToUpdateRequestDTO labelsToUpdateRequestDTO) {
        logger.debug("이슈의 레이블 편집");
        logger.debug("이슈의 레이블 편집 요청 확인: {}", labelsToUpdateRequestDTO.toString());
        issueService.updateLabels(issueId, labelsToUpdateRequestDTO);
    }

    @GetMapping("/{issueId}/milestones")
    public MilestonesInIssueResponseDTO getMilestones(@PathVariable Long issueId) {
        logger.debug("이슈의 마일스톤 가져오기");
        return issueService.getMilestones(issueId);
    }

    @PatchMapping("/{issueId}/milestones")
    public void updateMilestones(@PathVariable Long issueId, @RequestBody MilestoneToUpdateRequestDTO milestonesToUpdateRequestDTO) {
        logger.debug("이슈의 마일스톤 편집");
        logger.debug("이슈의 마일스톤 편집 요청 확인: {}", milestonesToUpdateRequestDTO.toString());
        issueService.updateMilestone(issueId, milestonesToUpdateRequestDTO);
    }

    @LoginRequired
    @PostMapping("/{issueId}/comments")
    public void createComment(@UserId Long userId, @PathVariable Long issueId, @RequestBody CommentDTO comment) {
        logger.debug("이슈의 코멘트 생성");
        issueService.createComment(userId, issueId, comment);
    }

    @LoginRequired
    @PatchMapping("/{issueId}/comments")
    public void updateComment(@UserId Long userId, @PathVariable Long issueId, @RequestBody CommentDTO comment) {
        logger.debug("이슈의 코멘트 편집");
        issueService.updateComment(userId, issueId, comment);
    }

    @LoginRequired
    @DeleteMapping("/{issueId}/comments/{commentId}")
    public void deleteComment(@UserId Long userId, @PathVariable Long issueId, @PathVariable Long commentId) {
        logger.debug("이슈의 코멘트 삭제");
        issueService.deleteComment(userId, issueId, commentId);
    }
}

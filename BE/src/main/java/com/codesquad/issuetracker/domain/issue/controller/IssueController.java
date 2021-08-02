package com.codesquad.issuetracker.domain.issue.controller;

import com.codesquad.issuetracker.domain.issue.IssueFilter;
import com.codesquad.issuetracker.domain.issue.request.IssueRequest;
import com.codesquad.issuetracker.domain.user.User;
import com.codesquad.issuetracker.response.ApiResponse;
import com.codesquad.issuetracker.domain.issue.service.IssueService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/issue")
public class IssueController {

    private final IssueService issueService;

    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    @GetMapping("/open")
    public ApiResponse getOpenedIssues() {
        return ApiResponse.ok(issueService.getOpenedIssues());
    }

    @GetMapping("/close")
    public ApiResponse getClosedIssues() {
        return ApiResponse.ok(issueService.getClosedIssues());
    }

    @GetMapping("/title")
    public ApiResponse getIssueByTitle(@RequestParam String title) {
        return ApiResponse.ok(issueService.getIssuesByTitle(title));
    }

    @GetMapping("/author")
    public ApiResponse getIssueByAuthor(@RequestParam Long authorId) {
        return ApiResponse.ok(issueService.getIssuesByAuthor(authorId));
    }

    @GetMapping("/assignee")
    public ApiResponse getIssueByAssignee(@RequestParam Long assigneeId) {
        return ApiResponse.ok(issueService.getIssuesByAssignee(assigneeId));
    }

    @GetMapping("/comment")
    public ApiResponse getIssueByComment(@RequestParam Long commentAuthorId) {
        return ApiResponse.ok(issueService.getIssuesByComment(commentAuthorId));
    }

    @GetMapping("/{issueId}")
    public ApiResponse getIssue(@PathVariable Long issueId) {
        return ApiResponse.ok(issueService.getIssue(issueId));
    }

    @GetMapping("/filter")
    public ApiResponse getFilteredIssues(IssueFilter issueFilter) {
        return ApiResponse.ok(issueService.getFilteredIssues(issueFilter));
    }

    @PostMapping
    public ApiResponse createIssue(@RequestBody IssueRequest issueRequest) {
        return ApiResponse.ok(issueService.addIssue(issueRequest));
    }

    @PutMapping("/{issueId}/title")
    public ApiResponse editTitle(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest, @RequestAttribute User user) {
        issueService.updateTitle(issueId, issueRequest, user);
        return ApiResponse.ok();
    }

    @PutMapping("/{issueId}/content")
    public ApiResponse editContent(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest, @RequestAttribute User user) {
        issueService.updateContent(issueId, issueRequest, user);
        return ApiResponse.ok();
    }

    @PutMapping("/{issueId}/status")
    public ApiResponse editStatus(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest, @RequestAttribute User user) {
        issueService.updateStatus(issueId, issueRequest, user);
        return ApiResponse.ok();
    }

    @PutMapping("/{issueId}/milestone")
    public ApiResponse editMilestone(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest, @RequestAttribute User user) {
        issueService.updateMilestone(issueId, issueRequest, user);
        return ApiResponse.ok();
    }

    @PutMapping("/{issueId}/label")
    public ApiResponse editLabel(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest, @RequestAttribute User user) {
        issueService.updateLabel(issueId, issueRequest, user);
        return ApiResponse.ok();
    }

    @PutMapping("/{issueId}/assignee")
    public ApiResponse editAssignee(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest, @RequestAttribute User user) {
        issueService.updateAssignee(issueId, issueRequest, user);
        return ApiResponse.ok();
    }

    @DeleteMapping("/{issueId}")
    public ApiResponse deleteIssue(@PathVariable Long issueId, @RequestAttribute User user) {
        issueService.deleteIssue(issueId, user);
        return ApiResponse.ok();
    }


}

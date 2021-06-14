package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.domain.Issue;
import com.codesquad.issuetracker.response.*;
import com.codesquad.issuetracker.request.IssueRequest;
import com.codesquad.issuetracker.service.IssueService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

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

    @GetMapping("/{issueId}")
    public ApiResponse getIssue(@PathVariable Long issueId) {
        return ApiResponse.ok(issueService.getIssue(issueId));
    }

    @PostMapping
    public ApiResponse createIssue(@RequestBody IssueRequest issueRequest) {
        System.out.println(issueRequest.toString());
        return ApiResponse.ok(issueService.addIssue(Issue.issueRequestToIssue(issueRequest)));
    }

    @PutMapping("/{issueId}/title")
    public ApiResponse editTitle(@PathVariable Long issueId, @RequestBody String title) {
        return ApiResponse.ok("Edit Title of the Issue");
    }

    @PutMapping("/{issueId}/assignee")
    public ApiResponse editAssignee(@PathVariable Long issueId, @RequestBody ArrayList<String> assigneeList) {
        return ApiResponse.ok("Edit Assignee of the Issue");
    }

    @PutMapping("/{issueId}/content")
    public ApiResponse editContent(@PathVariable Long issueId, @RequestBody String content) {
        return ApiResponse.ok("Edit Content of the Issue");
    }

    @PutMapping("/{issueId}/status")
    public ApiResponse editStatus(@PathVariable Long issueId, @RequestBody boolean status) {
        return ApiResponse.ok("Edit Status of the Issue");
    }

    @PutMapping("/{issueId}/label")
    public ApiResponse editLabel(@PathVariable Long issueId, @RequestBody ArrayList<String> labelList) {
        return ApiResponse.ok("Edit Labels of the Issue");
    }


    @PutMapping("/{issueId}/milestone")
    public ApiResponse editMilestone(@PathVariable Long issueId, @RequestBody Long milestoneId) {
        return ApiResponse.ok("Edit Milestone of the Issue");
    }

    @DeleteMapping("/{issueId}")
    public ApiResponse deleteIssue(@PathVariable Long issueId) {
        issueService.deleteIssue(issueId);
        return ApiResponse.ok();
    }

}

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
    public ApiResponse editTitle(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
        issueService.updateTitle(issueId, issueRequest);
        return ApiResponse.ok();
    }

    @PutMapping("/{issueId}/content")
    public ApiResponse editContent(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
        issueService.updateContent(issueId, issueRequest);
        return ApiResponse.ok();
    }

    @PutMapping("/{issueId}/status")
    public ApiResponse editStatus(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
        issueService.updateStatus(issueId, issueRequest);
        return ApiResponse.ok();
    }

    @PutMapping("/{issueId}/milestone")
    public ApiResponse editMilestone(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
            issueService.updateMilestone(issueId, issueRequest);
            return ApiResponse.ok();
    }

//    @PutMapping("/{issueId}/label")
//    public ApiResponse editLabel(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
//        issueService.updateLabel(issueId, issueRequest.getLabel());
//        return ApiResponse.ok();
//    }

    @PutMapping("/{issueId}/assignee")
    public ApiResponse editAssignee(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
        issueService.updateAssignee(issueId, issueRequest);
        return ApiResponse.ok();
   }

    @DeleteMapping("/{issueId}")
    public ApiResponse deleteIssue(@PathVariable Long issueId) {
        issueService.deleteIssue(issueId);
        return ApiResponse.ok();
    }

}

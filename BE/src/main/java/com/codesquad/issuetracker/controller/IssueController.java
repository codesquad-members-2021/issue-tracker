package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.response.*;
import com.codesquad.issuetracker.request.IssueRequest;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.Set;

@RestController
@RequestMapping("/issue")
public class IssueController {

    @GetMapping("/open")
    public ApiResponse getOpenedIssues() {
        return ApiResponse.ok("Get Issue List");
    }

    @GetMapping("/close")
    public ApiResponse getClosedIssues() {
        return ApiResponse.ok("Get Issue List");
    }

    @GetMapping("/{issueId}")
    public ApiResponse getIssue(@PathVariable Long issueId) {
        LocalDateTime createdAt = LocalDateTime.now();
        LabelResponse labelResponse1 = new LabelResponse("label title 1", "label content 1", "FFFFFF");
        LabelResponse labelResponse2 = new LabelResponse("label title 2", "label content 2", "FFFFFF");
        Set<LabelResponse> labelResponseSet = new LinkedHashSet<>();
        labelResponseSet.add(labelResponse1);
        labelResponseSet.add(labelResponse2);
        UserResponse userResponse = new UserResponse("bibi", "bibi6666667");
        MilestoneForIssueResponse milestoneForIssueResponse = new MilestoneForIssueResponse(1L, "milestone title 1");
        IssueResponse issueResponse = new IssueResponse(1L, "issue title 1", "issue content 1", true,
                createdAt, labelResponseSet, userResponse, milestoneForIssueResponse);
        return ApiResponse.ok(issueResponse);
    }

    @PostMapping
    public ApiResponse createIssue(@RequestBody IssueRequest issuerequest) {
        return ApiResponse.ok("Create Issue");
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
        return ApiResponse.ok("Delete Issue Number " + issueId);
    }

}

package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.ApiResponse;
import com.codesquad.issuetracker.request.MilestoneRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/milestone")
public class MilestoneController {

    @PostMapping
    public ApiResponse createMilestone(MilestoneRequest milestoneRequest) {
        return ApiResponse.ok("Create Milestone");
    }

    @GetMapping
    public ApiResponse getMilestones() {
        return ApiResponse.ok("Get Milestones");
    }

    @GetMapping("/{milestoneId}")
    public ApiResponse getMilestones(@PathVariable Long milestoneId) {
        return ApiResponse.ok("Get Milestone Number " + milestoneId);
    }

}

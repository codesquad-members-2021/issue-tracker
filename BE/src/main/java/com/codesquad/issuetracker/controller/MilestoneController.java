package com.codesquad.issuetracker.controller;

import com.codesquad.issuetracker.response.ApiResponse;
import com.codesquad.issuetracker.request.MilestoneRequest;
import com.codesquad.issuetracker.response.MilestoneResponse;
import com.codesquad.issuetracker.service.MilestoneService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Set;

@RestController
@RequestMapping("/milestone")
public class MilestoneController {

    private final MilestoneService milestoneService;

    public MilestoneController(MilestoneService milestoneService) {
        this.milestoneService = milestoneService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ApiResponse createMilestone(@RequestBody MilestoneRequest milestoneRequest) {
        return ApiResponse.ok(milestoneService.create(milestoneRequest));
    }

    @GetMapping
    public ApiResponse getMilestones() {
        MilestoneResponse milestoneResponse1 = new MilestoneResponse(1L, "[BE] DB 설계", null, LocalDateTime.now(), 1, 1, 50);
        MilestoneResponse milestoneResponse2 = new MilestoneResponse(1L, "[BE] API 설계", null, LocalDateTime.now(), 2, 2, 50);
        Set<MilestoneResponse> milestoneResponseSet = new LinkedHashSet<>();
        milestoneResponseSet.add(milestoneResponse1);
        milestoneResponseSet.add(milestoneResponse2);
        return ApiResponse.ok(milestoneResponseSet);
    }

    @GetMapping("/{milestoneId}")
    public ApiResponse getMilestone(@PathVariable Long milestoneId) {
        MilestoneResponse milestoneResponse = new MilestoneResponse(1L, "[BE] DB 설계", null, LocalDateTime.now(), 1, 1, 50);

        return ApiResponse.ok(milestoneResponse);
    }

}

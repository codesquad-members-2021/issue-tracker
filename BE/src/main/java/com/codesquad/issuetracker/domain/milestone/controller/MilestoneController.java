package com.codesquad.issuetracker.domain.milestone.controller;

import com.codesquad.issuetracker.domain.milestone.request.EditedMilestoneRequest;
import com.codesquad.issuetracker.response.ApiResponse;
import com.codesquad.issuetracker.domain.milestone.request.MilestoneRequest;
import com.codesquad.issuetracker.domain.milestone.service.MilestoneService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;


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
        final int DEFAULT_PAGE = 0;
        return ApiResponse.ok(milestoneService.getList(DEFAULT_PAGE));
    }

    @GetMapping("/{milestoneId}")
    public ApiResponse getMilestone(@NotNull @PathVariable Long milestoneId) {
        return ApiResponse.ok(milestoneService.getOne(milestoneId));
    }

    @PutMapping("/{milestoneId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void editMilestone(@NotNull @PathVariable Long milestoneId, @RequestBody EditedMilestoneRequest editedMilestoneRequest) {
        milestoneService.edit(milestoneId, editedMilestoneRequest);
    }

    @DeleteMapping("/{milestoneId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMilestone(@NotNull @PathVariable Long milestoneId){
        milestoneService.delete(milestoneId);
    }

}

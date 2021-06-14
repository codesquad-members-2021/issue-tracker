package com.codesquad.issuetracker.milestone.controller;

import com.codesquad.issuetracker.milestone.dto.MilestoneRequest;
import com.codesquad.issuetracker.milestone.dto.MilestoneResponseWrapper;
import com.codesquad.issuetracker.milestone.dto.MilestoneResponses;
import com.codesquad.issuetracker.milestone.dto.MilestonesCountResponseWrapper;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class MilestoneController {

    @GetMapping("/milestones")
    public MilestoneResponses readAll() {
        return MilestoneDummyData.milestonesResponse();
    }

    @PostMapping("/milestones")
    public MilestoneResponseWrapper create(@RequestBody @Valid MilestoneRequest milestoneRequest) {
        return MilestoneResponseWrapper.from(MilestoneDummyData.openMilestoneResponse());
    }

    @PutMapping("/milestones/{milestoneId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable long milestoneId, @RequestBody @Valid MilestoneRequest milestoneRequest) {
    }

    @GetMapping("/milestones-count")
    public MilestonesCountResponseWrapper readAllCount() {
        return MilestonesCountResponseWrapper.from(MilestoneDummyData.milestonesCountResponses());
    }
}

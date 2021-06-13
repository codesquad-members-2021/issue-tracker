package com.codesquad.issuetracker.milestone;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class MileStoneController {

    @GetMapping("/milestones")
    public MileStoneResponses readAll() {
        return MileStoneDummyData.mileStonesResponse();
    }

    @PostMapping("/milestones")
    public MileStoneResponseWrapper create(@RequestBody @Valid MileStoneRequest mileStoneRequest) {
        return MileStoneResponseWrapper.from(MileStoneDummyData.openMileStoneResponse());
    }

    @PutMapping("/milestones/{milestoneId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable long milestoneId, @RequestBody @Valid MileStoneRequest mileStoneRequest) {
    }

    @GetMapping("/milestones-count")
    public MileStonesCountResponseWrapper readAllCount() {
        return MileStonesCountResponseWrapper.from(MileStoneDummyData.milestonesCountResponses());
    }
}

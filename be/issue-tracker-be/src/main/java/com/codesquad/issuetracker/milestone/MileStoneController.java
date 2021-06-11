package com.codesquad.issuetracker.milestone;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MileStoneController {

    @GetMapping("/milestones")
    public MileStoneResponses readAll() {
        return MileStoneDummyData.mileStonesResponse();
    }

    @GetMapping("/milestones-count")
    public MileStonesCountResponseWrapper readAllCount() {
        return MileStonesCountResponseWrapper.from(MileStoneDummyData.milestonesCountResponses());
    }
}

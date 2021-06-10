package com.codesquad.issuetracker.milestone;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
public class MileStoneController {

    @GetMapping("/milestones")
    public Set<MileStoneResponse> getMileStoneResponses() {
        return MileStoneDummyData.MileStonesResponse();
    }
}

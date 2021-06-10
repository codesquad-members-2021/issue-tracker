package com.codesquad.issuetracker.milestone;

import com.codesquad.issuetracker.label.LabelDummyData;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
public class MileStoneController {

    @GetMapping("/milestones")
    public Set<MileStoneResponse> getMileStoneResponses() {
        return MileStoneDummyData.mileStonesResponse();
    }

    @GetMapping("/milestones-count")
    public int getMilestonesCount() {
        return MileStoneDummyData.milestonesCountResponses();
    }
}

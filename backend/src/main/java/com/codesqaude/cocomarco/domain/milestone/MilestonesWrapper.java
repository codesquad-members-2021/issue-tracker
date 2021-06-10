package com.codesqaude.cocomarco.domain.milestone;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.util.List;

@Getter
public class MilestonesWrapper {

    @JsonProperty(value = "milestones")
    private List<MilestoneResponse> milestoneResponses;
    private long labelCount;

    public MilestonesWrapper(List<MilestoneResponse> milestoneResponses, long labelCount) {
        this.milestoneResponses = milestoneResponses;
        this.labelCount = labelCount;
    }
}

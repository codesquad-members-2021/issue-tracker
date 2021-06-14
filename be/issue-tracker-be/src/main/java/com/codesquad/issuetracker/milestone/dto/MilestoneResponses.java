package com.codesquad.issuetracker.milestone.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Data(staticConstructor = "from")
public class MilestoneResponses {

    @JsonProperty("milestones")
    private final Set<MilestoneResponse> milestoneResponses;

    public static MilestoneResponses from(Collection<MilestoneResponse> milestoneResponses) {
        return new MilestoneResponses(new HashSet<>(milestoneResponses));
    }
}

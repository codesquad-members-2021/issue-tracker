package com.codesquad.issuetracker.milestone.dto;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Data;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Data(staticConstructor = "from")
public class MilestoneResponses {

    @JsonValue
    private final Set<MilestoneResponse> milestoneResponses;

    public static MilestoneResponses from(Collection<MilestoneResponse> milestoneResponses) {
        return new MilestoneResponses(new HashSet<>(milestoneResponses));
    }
}

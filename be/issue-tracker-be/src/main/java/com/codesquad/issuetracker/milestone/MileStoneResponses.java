package com.codesquad.issuetracker.milestone;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Data(staticConstructor = "from")
public class MileStoneResponses {

    @JsonProperty("milestones")
    private final Set<MileStoneResponse> mileStoneResponses;

    public static MileStoneResponses from(Collection<MileStoneResponse> mileStoneResponses) {
        return new MileStoneResponses(new HashSet<>(mileStoneResponses));
    }
}

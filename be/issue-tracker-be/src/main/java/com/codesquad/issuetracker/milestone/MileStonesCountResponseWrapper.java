package com.codesquad.issuetracker.milestone;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data(staticConstructor = "from")
public class MileStonesCountResponseWrapper {

    @JsonProperty("milestonesCount")
    private final MileStonesCountResponse mileStonesCountResponse;
}

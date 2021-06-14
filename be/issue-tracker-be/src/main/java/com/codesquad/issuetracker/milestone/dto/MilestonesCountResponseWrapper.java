package com.codesquad.issuetracker.milestone.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data(staticConstructor = "from")
public class MilestonesCountResponseWrapper {

    @JsonProperty("milestonesCount")
    private final MilestonesCountResponse milestonesCountResponse;
}

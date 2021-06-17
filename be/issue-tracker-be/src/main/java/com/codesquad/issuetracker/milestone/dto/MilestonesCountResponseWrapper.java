package com.codesquad.issuetracker.milestone.dto;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Data;

@Data(staticConstructor = "from")
public class MilestonesCountResponseWrapper {

    @JsonValue
    private final MilestonesCountResponse milestonesCountResponse;
}

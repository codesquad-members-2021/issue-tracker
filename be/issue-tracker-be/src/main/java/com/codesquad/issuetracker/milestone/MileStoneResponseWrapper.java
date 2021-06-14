package com.codesquad.issuetracker.milestone;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data(staticConstructor = "from")
public class MileStoneResponseWrapper {

    @JsonProperty("milestone")
    private final MileStoneResponse mileStoneResponse;
}

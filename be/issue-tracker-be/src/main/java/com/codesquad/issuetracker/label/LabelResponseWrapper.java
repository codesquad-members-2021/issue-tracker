package com.codesquad.issuetracker.label;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data(staticConstructor = "from")
public class LabelResponseWrapper {

    @JsonProperty("label")
    private final LabelResponse labelResponse;
}

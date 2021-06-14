package com.codesquad.issuetracker.label.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data(staticConstructor = "from")
public class LabelsCountResponseWrapper {

    @JsonProperty("labelsCount")
    private final LabelsCountResponse labelsCountResponse;
}

package com.codesquad.issuetracker.label.dto;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Data;

@Data(staticConstructor = "from")
public class LabelsCountResponseWrapper {

    @JsonValue
    private final LabelsCountResponse labelsCountResponse;
}

package com.codesquad.issuetracker.label.dto;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Data;

@Data(staticConstructor = "from")
public class LabelResponseWrapper {

    @JsonValue
    private final LabelResponse labelResponse;
}

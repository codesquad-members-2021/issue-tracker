package com.codesquad.issuetracker.label;

import lombok.Data;

@Data(staticConstructor = "from")
public class LabelsCountResponseWrapper {
    private final LabelsCountResponse labelsCount;
}

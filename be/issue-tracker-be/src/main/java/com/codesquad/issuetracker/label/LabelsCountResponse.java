package com.codesquad.issuetracker.label;

import lombok.Data;

@Data(staticConstructor = "from")
public class LabelsCountResponse {
    private final int count;
}

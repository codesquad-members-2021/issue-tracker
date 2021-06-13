package com.codesquad.issuetracker.label;

import lombok.Data;

@Data(staticConstructor = "from")
public class LabelResponseWrapper {
    private final LabelResponse labelResponse;
}

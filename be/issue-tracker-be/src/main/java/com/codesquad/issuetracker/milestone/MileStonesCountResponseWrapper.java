package com.codesquad.issuetracker.milestone;

import lombok.Data;

@Data(staticConstructor = "from")
public class MileStonesCountResponseWrapper {
    private final MileStonesCountResponse mileStonesCount;
}

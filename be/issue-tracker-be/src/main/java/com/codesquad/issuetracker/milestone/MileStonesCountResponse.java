package com.codesquad.issuetracker.milestone;

import lombok.Data;

@Data(staticConstructor = "from")
public class MileStonesCountResponse {
    private final int count;
}

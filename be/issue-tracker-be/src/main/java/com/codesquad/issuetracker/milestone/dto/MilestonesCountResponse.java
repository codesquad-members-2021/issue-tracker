package com.codesquad.issuetracker.milestone.dto;

import lombok.Data;

@Data(staticConstructor = "from")
public class MilestonesCountResponse {
    private final int count;
}

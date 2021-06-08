package com.jane_eno.issue_tracker.web.dto.response;

import lombok.*;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class MilestonesResponseDTO {

    private final int labelsCount;
    private final int milestonesCount;
    private final List<Milestone> milestones;
}

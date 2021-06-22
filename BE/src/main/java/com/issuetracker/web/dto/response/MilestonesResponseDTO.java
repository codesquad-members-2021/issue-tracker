package com.issuetracker.web.dto.response;

import lombok.*;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class MilestonesResponseDTO {

    private final Long labelsCount;
    private final Long openedMilestonesCount;
    private final Long closedMilestonesCount;
    private final List<MilestoneDTO> milestones;

    public static MilestonesResponseDTO of(Long labelsCount, Long openedMilestonesCount, Long closedMilestonesCount, List<MilestoneDTO> milestoneDTOs) {
        return MilestonesResponseDTO.builder()
                .labelsCount(labelsCount)
                .openedMilestonesCount(openedMilestonesCount)
                .closedMilestonesCount(closedMilestonesCount)
                .milestones(milestoneDTOs)
                .build();
    }
}

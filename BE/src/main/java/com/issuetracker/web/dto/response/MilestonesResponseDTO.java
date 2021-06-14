package com.issuetracker.web.dto.response;

import lombok.*;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class MilestonesResponseDTO {

    private final Long labelsCount;
    private final Long milestonesCount;
    private final List<MilestoneDTO> milestones;

    public static MilestonesResponseDTO of(Long labelsCount, Long milestonesCount, List<MilestoneDTO> milestoneDTOs) {
        return MilestonesResponseDTO.builder()
                .labelsCount(labelsCount)
                .milestonesCount(milestonesCount)
                .milestones(milestoneDTOs)
                .build();
    }
}

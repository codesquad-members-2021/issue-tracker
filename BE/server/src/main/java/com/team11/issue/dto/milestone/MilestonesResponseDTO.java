package com.team11.issue.dto.milestone;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor
@Builder
public class MilestonesResponseDTO {

    private final List<MilestoneResponseDTO> milestones;

    public static MilestonesResponseDTO from(List<MilestoneResponseDTO> milestones) {
        return MilestonesResponseDTO.builder()
                .milestones(milestones)
                .build();
    }
}

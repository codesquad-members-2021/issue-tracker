package com.team11.issue.dto.milestone;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor(staticName = "of")
@Builder
@Getter
public class MilestonesResponseDTO {

    private final List<MilestoneResponseDTO> milestones = new ArrayList<>();
}

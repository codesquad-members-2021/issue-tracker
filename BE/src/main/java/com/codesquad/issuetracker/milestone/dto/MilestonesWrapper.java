package com.codesquad.issuetracker.milestone.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class MilestonesWrapper {

    private final List<MilestoneResponseDto> milestones;

    public static MilestonesWrapper create(List<MilestoneResponseDto> milestoneResponseDtoList) {
        return new MilestonesWrapper(milestoneResponseDtoList);
    }
}

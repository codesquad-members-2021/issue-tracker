package com.codesquad.issuetracker.milestone.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class MilestonesWrapper {

    private List<MilestoneResponseDto> milestoneResponseDtoList;

    public static MilestonesWrapper create(List<MilestoneResponseDto> milestoneResponseDtoList) {
        return new MilestonesWrapper(milestoneResponseDtoList);
    }
}

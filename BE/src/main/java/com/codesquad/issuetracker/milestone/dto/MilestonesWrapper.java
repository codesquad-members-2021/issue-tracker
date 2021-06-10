package com.codesquad.issuetracker.milestone.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class MilestonesWrapper {

    private List<MilestoneResponseDto> milestoneResponseDtoList;

    private MilestonesWrapper(List<MilestoneResponseDto> milestoneResponseDtoList) {
        this.milestoneResponseDtoList = milestoneResponseDtoList;
    }

    public static MilestonesWrapper create(List<MilestoneResponseDto> milestoneResponseDtoList) {
        return new MilestonesWrapper(milestoneResponseDtoList);
    }
}

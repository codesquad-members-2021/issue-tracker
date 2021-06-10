package com.codesquad.issuetracker.milestone.dto;

import lombok.Getter;

@Getter
public class MilestoneWrapper {

    private MilestoneResponseDto milestoneResponseDto;

    private MilestoneWrapper(MilestoneResponseDto milestoneResponseDto) {
        this.milestoneResponseDto = milestoneResponseDto;
    }

    public static MilestoneWrapper create(MilestoneResponseDto milestoneResponseDto) {
        return new MilestoneWrapper(milestoneResponseDto);
    }
}

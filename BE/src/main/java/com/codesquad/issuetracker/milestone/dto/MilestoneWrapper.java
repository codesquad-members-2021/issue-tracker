package com.codesquad.issuetracker.milestone.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class MilestoneWrapper {

    private final MilestoneResponseDto milestone;

    public static MilestoneWrapper create(MilestoneResponseDto milestoneResponseDto) {
        return new MilestoneWrapper(milestoneResponseDto);
    }
}

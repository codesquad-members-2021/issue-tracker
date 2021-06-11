package com.codesqaude.cocomarco.domain.milestone.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class MilestoneResponseWrapper {

    private List<MilestoneResponse> milestones;
    private long labelCount;
}

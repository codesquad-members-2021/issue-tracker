package com.codesqaude.cocomarco.domain.milestone.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class MilestoneResponseWrapper {

    @JsonProperty(value = "milestones")
    private List<MilestoneResponse> milestoneResponses;
    private long labelCount;
}

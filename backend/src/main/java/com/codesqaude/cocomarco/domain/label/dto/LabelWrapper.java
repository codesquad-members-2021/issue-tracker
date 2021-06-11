package com.codesqaude.cocomarco.domain.label.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class LabelWrapper {

    @JsonProperty(value = "labels")
    private List<LabelResponse> labelResponses;
    private long milestoneCount;
}

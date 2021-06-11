package com.codesqaude.cocomarco.domain.label.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class LabelWrapper {

    private List<LabelResponse> labels;
    private long milestoneCount;
}

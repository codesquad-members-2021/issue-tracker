package com.codesquad.issuetracker.label.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class LabelsWrapper {

    private final List<LabelDto> labels;

    private LabelsWrapper(List<LabelDto> labels) {
        this.labels = labels;
    }

    public static LabelsWrapper wrap(List<LabelDto> labels) {
        return new LabelsWrapper(labels);
    }
}

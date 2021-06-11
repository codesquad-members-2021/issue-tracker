package com.codesquad.issuetracker.label.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class LabelsWrapper {

    private final List<LabelDto> labels;

    public static LabelsWrapper wrap(List<LabelDto> labels) {
        return new LabelsWrapper(labels);
    }
}

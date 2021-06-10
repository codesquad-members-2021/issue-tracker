package com.codesquad.issuetracker.label.dto;

import lombok.Getter;

@Getter
public class LabelWrapper {

    private final LabelDto label;

    private LabelWrapper(LabelDto label) {
        this.label = label;
    }

    public static LabelWrapper wrap(LabelDto label) {
        return new LabelWrapper(label);
    }
}

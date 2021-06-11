package com.codesquad.issuetracker.label.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class LabelWrapper {

    private final LabelDto label;

    public static LabelWrapper wrap(LabelDto label) {
        return new LabelWrapper(label);
    }
}

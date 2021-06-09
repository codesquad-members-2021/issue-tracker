package com.codesquad.issuetracker.label.domain;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Embeddable
@Getter
public class LabelName {

    @Column(name = "label_name")
    private String text;

    @Column(name = "label_name_color")
    @Enumerated(EnumType.STRING)
    private TextColor textColor;

    protected LabelName() {
    }

    private LabelName(String text, TextColor textColor) {
        this.text = text;
        this.textColor = textColor;
    }

    public static LabelName of(String text, TextColor textColor) {
        return new LabelName(text, textColor);
    }
}

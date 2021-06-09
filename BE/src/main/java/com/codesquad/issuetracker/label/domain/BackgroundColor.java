package com.codesquad.issuetracker.label.domain;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
@Getter
public class BackgroundColor {

    @Column(name = "background_color")
    private String colorCode;

    protected BackgroundColor() {
    }

    private BackgroundColor(String colorCode) {
        this.colorCode = colorCode;
    }

    public static BackgroundColor of(String colorCode) {
        return new BackgroundColor(colorCode);
    }
}

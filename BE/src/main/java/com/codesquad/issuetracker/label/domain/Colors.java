package com.codesquad.issuetracker.label.domain;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.util.regex.Pattern;

@Embeddable
@Getter
public class Colors {

    private static final Pattern COLOR = Pattern.compile("#[0-9A-Fa-f]{6}");

    @Column(name = "LABEL_BACKGROUND_COLOR", nullable = false)
    private String backgroundColor;

    @Column(name = "LABEL_TEXT_COLOR", nullable = false)
    private String textColor;

    protected Colors() {

    }

    private Colors(String backgroundColor, String textColor) {
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
    }

    public static Colors of(String backgroundColor, String textColor) {
        checkColorFormat(backgroundColor);
        checkColorFormat(textColor);

        return new Colors(backgroundColor, textColor);
    }

    private static void checkColorFormat(String textColor) {
        if (!COLOR.matcher(textColor).matches()) {
            throw new IllegalArgumentException("Color Format is invalid");
        }
    }
}

package com.codesquad.issuetracker.label.dto;


import com.codesquad.issuetracker.label.domain.Colors;
import lombok.Getter;

@Getter
public class ColorsDto {

    private final String backgroundColor;
    private final String textColor;

    private ColorsDto(String backgroundColor, String textColor) {
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
    }

    public static ColorsDto of(Colors colors) {
        return new ColorsDto(colors.getBackgroundColor(), colors.getTextColor());
    }

    public Colors toColors() {
        return Colors.of(backgroundColor, textColor);
    }
}

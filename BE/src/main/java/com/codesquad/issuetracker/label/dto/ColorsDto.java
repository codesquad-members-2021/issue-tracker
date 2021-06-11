package com.codesquad.issuetracker.label.dto;


import com.codesquad.issuetracker.label.domain.Colors;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class ColorsDto {

    private String backgroundColor;
    private String textColor;

    public static ColorsDto of(Colors colors) {
        return new ColorsDto(colors.getBackgroundColor(), colors.getTextColor());
    }

    public Colors toColors() {
        return new Colors.Builder()
                .backgroundColor(backgroundColor)
                .textColor(textColor)
                .build();
    }
}

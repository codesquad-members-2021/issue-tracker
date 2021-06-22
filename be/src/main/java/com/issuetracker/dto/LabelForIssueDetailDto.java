package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.issuetracker.domain.Label;

public class LabelForIssueDetailDto {
    private String title;

    @JsonProperty("color_code")
    private String colorCode;

    @JsonProperty("font_light")
    private boolean fontLight;


    public LabelForIssueDetailDto(String title, String colorCode, boolean fontLight) {
        this.title = title;
        this.colorCode = colorCode;
        this.fontLight = fontLight;
    }

    public String getTitle() {
        return title;
    }

    public String getColorCode() {
        return colorCode;
    }

    public boolean isFontLight() {
        return fontLight;
    }

    public static LabelForIssueDetailDto of(Label label) {
        return new LabelForIssueDetailDto(
                label.getTitle(),
                label.getColorCode(),
                label.isFontLight()
        );
    }
}

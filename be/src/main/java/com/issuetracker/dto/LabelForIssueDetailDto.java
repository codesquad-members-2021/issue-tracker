package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.issuetracker.domain.Label;

public class LabelForIssueDetailDto {
    private Long id;

    private String title;

    @JsonProperty("color_code")
    private String colorCode;

    @JsonProperty("font_light")
    private boolean fontLight;

    public LabelForIssueDetailDto(Long id, String title, String colorCode, boolean fontLight) {
        this.id = id;
        this.title = title;
        this.colorCode = colorCode;
        this.fontLight = fontLight;
    }

    public Long getId() {
        return id;
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
                label.getId(),
                label.getTitle(),
                label.getColorCode(),
                label.isFontLight()
        );
    }
}

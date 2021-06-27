package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.issuetracker.domain.Label;

public class LabelDto {
    private Long id;
    private String title;
    private String description;

    @JsonProperty("color_code")
    private String colorCode;

    @JsonProperty("font_light")
    private boolean fontLight;

    public LabelDto(Long id, String title, String description, String colorCode, boolean fontLight) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.colorCode = colorCode;
        this.fontLight = fontLight;
    }

    public static LabelDto of(Label label) {
        return new LabelDto(
               label.getId(),
                label.getTitle(),
                label.getDescription(),
                label.getColorCode(),
                label.isFontLight()
        );
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getColorCode() {
        return colorCode;
    }

    public boolean isFontLight() {
        return fontLight;
    }
}

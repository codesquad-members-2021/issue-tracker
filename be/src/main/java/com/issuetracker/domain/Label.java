package com.issuetracker.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Label {
    private Long id;
    private String title;
    private String description;

    @JsonProperty("color_code")
    private String colorCode;

    @JsonProperty("text_color")
    private String textColor;

    public Label() {
    }

    public Label(Long id, String title, String description, String colorCode, String textColor) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.colorCode = colorCode;
        this.textColor = textColor;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getColorCode() {
        return colorCode;
    }

    public void setColorCode(String colorCode) {
        this.colorCode = colorCode;
    }

    public String getTextColor() {
        return textColor;
    }

    public void setTextColor(String textColor) {
        this.textColor = textColor;
    }
}

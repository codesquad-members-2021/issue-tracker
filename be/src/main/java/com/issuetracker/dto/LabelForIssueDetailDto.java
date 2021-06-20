package com.issuetracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.issuetracker.domain.Label;

public class LabelForIssueDetailDto {
    private String title;

    @JsonProperty("color_code")
    private String colorCode;


    public LabelForIssueDetailDto(String title, String colorCode) {
        this.title = title;
        this.colorCode = colorCode;
    }

    public String getTitle() {
        return title;
    }

    public String getColorCode() {
        return colorCode;
    }

    public static LabelForIssueDetailDto of(Label label) {
        return new LabelForIssueDetailDto(
                label.getTitle(),
                label.getColorCode()
        );
    }
}

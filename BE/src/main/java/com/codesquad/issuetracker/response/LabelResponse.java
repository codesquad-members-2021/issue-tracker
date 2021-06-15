package com.codesquad.issuetracker.response;

import com.codesquad.issuetracker.domain.Label;

public class LabelResponse {

    private String title;
    private String content;
    private String color;

    public LabelResponse(String title, String content, String color) {
        this.title = title;
        this.content = content;
        this.color = color;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public String getColor() {
        return color;
    }

    public static LabelResponse labelToLabelResponse(Label label) {
        return new LabelResponse(label.getTitle(), label.getContent(), label.getColor());
    }
}

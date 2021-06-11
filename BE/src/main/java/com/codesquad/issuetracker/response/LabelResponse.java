package com.codesquad.issuetracker.response;

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
}

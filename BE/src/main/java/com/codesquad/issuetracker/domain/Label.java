package com.codesquad.issuetracker.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private final Long id;
    private String title;
    private String content;
    private String color;

    private Label(Long id, String title, String content, String color) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.color = color;
    }

    public Label create(Long id, String title, String content, String color) {
        return new Label(id, title, content, color);
    }
}

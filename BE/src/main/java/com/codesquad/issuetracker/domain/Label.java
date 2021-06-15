package com.codesquad.issuetracker.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private String color;

    @OneToMany(mappedBy="label")
    private List<IssueLabel> issueLabels = new ArrayList<>();

    private Label(Long id, String title, String content, String color) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.color = color;
    }

    public Label() {

    }

    public Label create(Long id, String title, String content, String color) {
        return new Label(id, title, content, color);
    }

    public Long getId() {
        return id;
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

    public List<IssueLabel> getIssueLabels() {
        return issueLabels;
    }

    @Override
    public String toString() {
        return "Label{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", color='" + color + '\'' +
                ", issueLabels=" + issueLabels +
                '}';
    }
}

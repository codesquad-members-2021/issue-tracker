package com.codesquad.issuetracker.domain.label;

import com.codesquad.issuetracker.domain.issue.IssueLabel;
import com.codesquad.issuetracker.domain.label.request.LabelRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "label")
@Getter
@NoArgsConstructor
@ToString
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private String color;

    @JsonIgnore
    @OneToMany(mappedBy="label")
    private List<IssueLabel> issueLabels = new ArrayList<>();

    public Label(Long id, String title, String content, String color) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.color = color;
    }

    public Label(String title, String content, String color) {
        this.title = title;
        this.content = content;
        this.color = color;
    }

    public static Label create(Long id, String title, String content, String color) {
        return new Label(id, title, content, color);
    }

    public void update(LabelRequest labelRequest) {
        this.title = labelRequest.getTitle();
        this.content = labelRequest.getContent();
        this.color = labelRequest.getColor();
    }
}

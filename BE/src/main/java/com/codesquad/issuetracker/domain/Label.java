package com.codesquad.issuetracker.domain;

import com.codesquad.issuetracker.request.LabelRequest;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private String color;

    public static Label create(Long id, String title, String content, String color) {
        return new Label(id, title, content, color);
    }

    public void update(LabelRequest labelRequest) {
        this.title = labelRequest.getTitle();
        this.content = labelRequest.getContent();
        this.color = labelRequest.getColor();
    }
}

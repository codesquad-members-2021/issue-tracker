package com.codesquad.issuetracker.domain.label.request;


import com.codesquad.issuetracker.domain.label.Label;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LabelRequest {

    private String title;
    private String content;
    private String color;

    public Label create(){
        return Label.create(null, title, content, color);
    }
}

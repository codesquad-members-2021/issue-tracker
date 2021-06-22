package com.codesquad.issuetracker.domain.label.response;

import com.codesquad.issuetracker.domain.label.Label;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor

public class LabelResponse {

    private Long id;
    private String title;
    private String content;
    private String color;

    public static LabelResponse create(Label label) {
        return new LabelResponse(
                label.getId(),
                label.getTitle(),
                label.getContent(),
                label.getColor()
        );
    }

    public static LabelResponse labelToLabelResponse(Label label) {
        return new LabelResponse(label.getId(), label.getTitle(), label.getContent(), label.getColor());
    }
}

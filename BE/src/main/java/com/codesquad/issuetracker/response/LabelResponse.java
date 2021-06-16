package com.codesquad.issuetracker.response;

import com.codesquad.issuetracker.domain.Label;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LabelResponse {

    private String title;
    private String content;
    private String color;

    public static LabelResponse create(Label label) {
        return new LabelResponse(
                label.getTitle(),
                label.getContent(),
                label.getColor()
        );
    }

}

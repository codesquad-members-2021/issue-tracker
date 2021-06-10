package com.codesquad.issuetracker.label.dto;

import com.codesquad.issuetracker.label.domain.Label;
import lombok.Getter;

@Getter
public class LabelRequest {

    private String name;
    private String description;
    private ColorsDto colors;

    public Label toEntity() {
        return Label.create(name, description, colors.toColors());
    }
}

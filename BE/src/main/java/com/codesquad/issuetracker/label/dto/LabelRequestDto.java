package com.codesquad.issuetracker.label.dto;

import com.codesquad.issuetracker.label.domain.Label;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
@Setter
public class LabelRequestDto {

    private String name;
    private String description;
    private ColorsDto colors;

    public Label toEntity() {
        return Label.create(name, description, colors.toColors());
    }
}

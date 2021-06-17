package com.team11.issue.dto.label;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LabelRequestDTO {

    private String title;
    private String description;
    private String color;
    private String bgColor;
}

package com.codesquad.issuetracker.label.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LabelResponse {
    private Long id;
    private String name;
    private String description;
    private String color;
}

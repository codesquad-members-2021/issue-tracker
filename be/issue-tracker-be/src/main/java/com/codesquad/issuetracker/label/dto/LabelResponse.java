package com.codesquad.issuetracker.label.dto;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(of = {"id"})
@Builder
public class LabelResponse {
    private Long id;
    private String name;
    private String description;
    private String color;
}

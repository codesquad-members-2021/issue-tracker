package com.codesquad.issuetracker.label.dto;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class LabelRequest {

    @NotEmpty
    private String name;

    private String description;

    @NotEmpty
    private String color;
}

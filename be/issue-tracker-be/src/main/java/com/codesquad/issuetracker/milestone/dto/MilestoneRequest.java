package com.codesquad.issuetracker.milestone.dto;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;

@Data
public class MilestoneRequest {

    @NotEmpty
    private String name;
    private String description;
    private LocalDate dueDate;
    private boolean isClosed;
}

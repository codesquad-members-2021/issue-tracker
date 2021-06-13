package com.codesquad.issuetracker.milestone;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;

@Data
public class MileStoneRequest {

    @NotEmpty
    private String name;
    private String description;
    private LocalDate dueDate;
    private boolean isClosed;
}

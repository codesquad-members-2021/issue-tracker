package com.team11.issue.dto.milestone;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class MilestoneRequestDTO {

    private String title;
    private String description;
    private LocalDate deadLineDate;
}

package com.codesquad.issuetracker.milestone.dto;

import com.codesquad.issuetracker.milestone.domain.Milestone;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@RequiredArgsConstructor
@ToString
public class MilestoneRequestDto {

    private final String title;

    private final String description;

    private final LocalDate dueDate;

    public Milestone toEntity() {
        return Milestone.create(title, description, dueDate);
    }
}

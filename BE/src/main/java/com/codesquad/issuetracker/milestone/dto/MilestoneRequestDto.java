package com.codesquad.issuetracker.milestone.dto;

import com.codesquad.issuetracker.milestone.domain.Milestone;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.beans.ConstructorProperties;
import java.time.LocalDate;

@Getter
@NoArgsConstructor
@ToString
public class MilestoneRequestDto {

    private String title;

    private String description;

    private LocalDate dueDate;

    @ConstructorProperties({"title", "description", "dueDate"})
    public MilestoneRequestDto(String title, String description,
                               @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    public Milestone toEntity() {
        return Milestone.create(title, description, dueDate);
    }
}

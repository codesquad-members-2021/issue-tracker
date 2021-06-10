package com.codesquad.issuetracker.milestone.dto;

import com.codesquad.issuetracker.milestone.domain.Milestone;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.Objects;
import java.util.UUID;

@ToString
@Getter
public class MilestoneResponseDto {

    private UUID id;

    private String title;

    private String description;

    private LocalDate dueDate;

    public MilestoneResponseDto(UUID id, String title, String description, LocalDate dueDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    public static MilestoneResponseDto fromEntity (Milestone entity) {
        return new MilestoneResponseDto(entity.getId(),
                entity.getTitle(),
                entity.getDescription(),
                entity.getDueDate());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof MilestoneResponseDto)) return false;
        MilestoneResponseDto that = (MilestoneResponseDto) o;
        return Objects.equals(id, that.id) && Objects.equals(title, that.title) &&
                Objects.equals(description, that.description) && Objects.equals(dueDate, that.dueDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, description, dueDate);
    }
}

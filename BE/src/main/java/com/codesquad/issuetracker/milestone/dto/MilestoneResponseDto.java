package com.codesquad.issuetracker.milestone.dto;

import com.codesquad.issuetracker.milestone.domain.Milestone;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.Objects;
import java.util.UUID;

@Getter
@ToString
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class MilestoneResponseDto {

    private final UUID id;

    private final String title;

    private final String description;

    private final LocalDate dueDate;

    private final int openIssues;

    private final int closedIssues;

    public static MilestoneResponseDto fromEntity(Milestone entity) {
        return new MilestoneResponseDto(entity.getId(),
                entity.getTitle(),
                entity.getDescription(),
                entity.getDueDate(),
                entity.getOpenIssues(),
                entity.getClosedIssues()
        );
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

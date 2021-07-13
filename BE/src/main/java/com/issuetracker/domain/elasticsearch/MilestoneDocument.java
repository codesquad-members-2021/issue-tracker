package com.issuetracker.domain.elasticsearch;

import com.issuetracker.domain.milestone.Milestone;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.elasticsearch.annotations.DateFormat;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class MilestoneDocument {

    private Long id;
    private String title;
    private String description;
    @Field(type = FieldType.Date, format = DateFormat.date)
    private LocalDate dueDate;
    private boolean isOpen;

    public static MilestoneDocument of(Milestone milestone) {
        if (milestone == null) {
            return null;
        }
        return MilestoneDocument.builder()
                .id(milestone.getId())
                .title(milestone.getTitle())
                .description(milestone.getDescription())
                .dueDate(milestone.getDueDate())
                .isOpen(milestone.isOpen())
                .build();
    }
}

package com.issuetracker.web.dto.response;

import com.issuetracker.domain.issue.Issue;
import com.issuetracker.domain.label.Color;
import com.issuetracker.domain.label.Label;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@Builder
@ToString
@AllArgsConstructor
public class LabelDTO {

    private final Long id;
    private final String name;
    private final Color color;
    private final String description;
    private final boolean isChecked;

    public static LabelDTO of(Label label, Issue issue) {
        return LabelDTO.builder()
                .id(label.getId())
                .name(label.getName())
                .color(label.getColor())
                .description(label.getDescription())
                .isChecked(issue.checkLabels(label))
                .build();
    }

    public static LabelDTO of(Label label) {
        return LabelDTO.builder()
                .id(label.getId())
                .name(label.getName())
                .color(label.getColor())
                .description(label.getDescription())
                .isChecked(false)
                .build();
    }
}

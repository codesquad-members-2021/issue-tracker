package com.issuetracker.web.dto.response;

import com.issuetracker.domain.elasticsearch.LabelDocument;
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

    public static LabelDTO of(Label label, boolean isChecked) {
        return LabelDTO.builder()
                .id(label.getId())
                .name(label.getName())
                .color(label.getColor())
                .description(label.getDescription())
                .isChecked(isChecked)
                .build();
    }

    public static LabelDTO of(LabelDocument labelDocument) {
        return LabelDTO.builder()
                .id(labelDocument.getId())
                .name(labelDocument.getName())
                .color(labelDocument.getColor())
                .description(labelDocument.getDescription())
                .isChecked(true)
                .build();
    }
}

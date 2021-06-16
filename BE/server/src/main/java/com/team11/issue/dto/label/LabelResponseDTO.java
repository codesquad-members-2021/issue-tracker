package com.team11.issue.dto.label;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.team11.issue.domain.Label;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@JsonPropertyOrder({"labelId", "title", "description", "color", "bgColor"})
@RequiredArgsConstructor
@Builder
@Getter
public class LabelResponseDTO {

    private final Long labelId;
    private final String title;
    private final String description;
    private final String color;
    private final String bgColor;

    public static LabelResponseDTO from(Label label) {
        return LabelResponseDTO.builder()
                .labelId(label.getId())
                .title(label.getTitle())
                .description(label.getDescription())
                .color(label.getColor())
                .bgColor(label.getBgColor())
                .build();
    }
}

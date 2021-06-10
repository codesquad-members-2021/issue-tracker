package com.codesquad.issuetracker.label.dto;

import com.codesquad.issuetracker.label.domain.Label;
import lombok.Getter;

import java.util.UUID;

@Getter
public class LabelDto {

    private final UUID id;
    private final String name;
    private final String description;
    private final ColorsDto colors;

    private LabelDto(UUID id, String name, String description, ColorsDto colors) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.colors = colors;
    }

    public static LabelDto fromEntity(Label label) {
        return new LabelDto(label.getId(), label.getName(), label.getDescription(),
                ColorsDto.of(label.getColors()));
    }
}

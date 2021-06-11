package com.codesquad.issuetracker.label.dto;

import com.codesquad.issuetracker.label.domain.Label;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class LabelDto {

    private final UUID id;
    private final String name;
    private final String description;
    private final ColorsDto colors;

    public static LabelDto fromEntity(Label label) {
        return new LabelDto(label.getId(), label.getName(), label.getDescription(),
                ColorsDto.of(label.getColors()));
    }
}

package com.team11.issue.dto.label;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
@Builder
@Getter
public class LabelsResponseDTO {

    private final List<LabelResponseDTO> labels;

    public static LabelsResponseDTO from(List<LabelResponseDTO> labels) {
        return LabelsResponseDTO.builder()
                .labels(labels)
                .build();
    }
}

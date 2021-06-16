package com.team11.issue.dto.label;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor(staticName = "of")
@Builder
@Getter
public class LabelsResponseDTO {

    private final List<LabelResponseDTO> labels = new ArrayList<>();
}

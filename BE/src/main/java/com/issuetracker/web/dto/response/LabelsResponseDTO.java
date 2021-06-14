package com.issuetracker.web.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class LabelsResponseDTO {

    private final int labelsCount;
    private final int milestonesCount;
    private final List<LabelDTO> labels;
}

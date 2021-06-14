package com.issuetracker.web.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class LabelsInIssueResponseDTO {

    private final List<LabelDTO> labels;
}

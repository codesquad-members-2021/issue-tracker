package com.issuetracker.web.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class MilestonesInIssueResponseDTO {

    private final List<MilestoneDTO> milestone;
}

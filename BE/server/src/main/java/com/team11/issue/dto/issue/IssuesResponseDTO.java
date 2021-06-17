package com.team11.issue.dto.issue;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor(staticName = "of")
@Builder
@Getter
public class IssuesResponseDTO {

    private final List<IssueResponseDTO> issues = new ArrayList<>();
}

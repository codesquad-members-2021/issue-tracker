package com.team11.issue.dto.issue;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Builder
@Getter
public class IssuesResponseDTO {

    private final List<IssueResponseDTO> issues;


    public static IssuesResponseDTO from(List<IssueResponseDTO> issues) {
        return IssuesResponseDTO.builder()
                .issues(issues)
                .build();
    }


}

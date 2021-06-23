package com.team11.issue.dto.issue;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
@Builder
@Getter
public class IssuesResponseDTO {

    private final List<IssueDetailResponseDTO> issues;


    public static IssuesResponseDTO from(List<IssueDetailResponseDTO> issues) {
        return IssuesResponseDTO.builder()
                .issues(issues)
                .build();
    }


}

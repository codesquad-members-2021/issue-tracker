package com.issuetracker.web.dto.response;

import com.issuetracker.web.dto.vo.Count;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class IssuesResponseDTO {

    private final Count count;
    private final List<IssueResponseDTO> issues;

    public static IssuesResponseDTO of(Count count, List<IssueResponseDTO> issues) {
        return IssuesResponseDTO.builder()
                .count(count)
                .issues(issues)
                .build();
    }
}

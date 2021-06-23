package com.team11.issue.dto.milestone;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@JsonPropertyOrder({"open", "closed"})
@Getter
@RequiredArgsConstructor
@Builder
public class IssueCountResponseDTO {

    private final Integer open;
    private final Integer closed;

    public static IssueCountResponseDTO from(int open, int closed) {
        return IssueCountResponseDTO.builder()
                .open(open)
                .closed(closed)
                .build();
    }
}

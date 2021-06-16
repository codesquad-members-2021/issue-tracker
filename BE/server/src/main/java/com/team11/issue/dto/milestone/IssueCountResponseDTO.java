package com.team11.issue.dto.milestone;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@JsonPropertyOrder({"open", "closed"})
@RequiredArgsConstructor
@Getter
public class IssueCountResponseDTO {

    private final Integer open;
    private final Integer closed;
}

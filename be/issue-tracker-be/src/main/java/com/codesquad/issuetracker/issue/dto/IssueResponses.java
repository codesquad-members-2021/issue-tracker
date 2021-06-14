package com.codesquad.issuetracker.issue.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data(staticConstructor = "from")
public class IssueResponses {

    @JsonProperty("issues")
    private final List<IssueResponse> issueResponses;
}

package com.codesquad.issuetracker.issue.dto;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Data;

@Data(staticConstructor = "from")
public class IssueCountResponseWrapper {

    @JsonValue
    private final IssueCountResponse issueCountResponse;
}

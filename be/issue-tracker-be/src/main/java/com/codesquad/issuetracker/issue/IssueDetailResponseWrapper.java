package com.codesquad.issuetracker.issue;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data(staticConstructor = "from")
public class IssueDetailResponseWrapper {

    @JsonProperty("issue")
    private final IssueDetailResponse issueDetailResponse;
}

package com.codesquad.issuetracker.issue.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.Valid;
import java.util.List;

@Data
public class IssueStateRequests {

    @JsonProperty("issues")
    private List<@Valid IssueStateRequest> issueStateRequests;
}

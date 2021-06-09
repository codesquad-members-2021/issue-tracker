package com.codesquad.issuetracker.issue;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IssueStateRequest {
    private long id;
    private boolean isClosed;
}

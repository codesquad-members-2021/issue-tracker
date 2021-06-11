package com.codesquad.issuetracker.issue;

import lombok.Data;

@Data(staticConstructor = "from")
public class IssueDetailResponseWrapper {
    private final IssueDetailResponse issue;
}

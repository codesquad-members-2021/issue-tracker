package com.codesquad.issuetracker.issue;

import com.codesquad.issuetracker.comment.StaticConstructorNames;
import lombok.Data;

@Data(staticConstructor = StaticConstructorNames.SINGLE_PARAMETER)
public class IssueDetailResponseWrapper {
    private final IssueDetailResponse issue;
}

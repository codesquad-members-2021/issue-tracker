package com.codesquad.issuetracker.issue;

import com.codesquad.issuetracker.comment.StaticConstructorNames;
import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data(staticConstructor = StaticConstructorNames.SINGLE_PARAMETER)
public class IssueResponses {
    private final List<IssueResponse> issues;

    public static IssueResponses from(Collection<IssueResponse> issueResponses) {
        return new IssueResponses(new ArrayList<>(issueResponses));
    }
}

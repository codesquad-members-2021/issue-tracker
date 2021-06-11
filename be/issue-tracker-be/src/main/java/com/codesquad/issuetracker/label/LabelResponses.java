package com.codesquad.issuetracker.label;

import com.codesquad.issuetracker.comment.StaticConstructorNames;
import lombok.Data;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Data(staticConstructor = StaticConstructorNames.SINGLE_PARAMETER)
public class LabelResponses {
    private final Set<LabelResponse> labelResponses;

    public static LabelResponses from(Collection<LabelResponse> labelResponses) {
        return new LabelResponses(new HashSet<>(labelResponses));
    }
}

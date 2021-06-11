package com.codesquad.issuetracker.milestone;

import com.codesquad.issuetracker.comment.StaticConstructorNames;
import lombok.Data;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Data(staticConstructor = StaticConstructorNames.SINGLE_PARAMETER)
public class MileStoneResponses {
    private final Set<MileStoneResponse> mileStoneResponses;

    public static MileStoneResponses from(Collection<MileStoneResponse> mileStoneResponses) {
        return new MileStoneResponses(new HashSet<>(mileStoneResponses));
    }
}

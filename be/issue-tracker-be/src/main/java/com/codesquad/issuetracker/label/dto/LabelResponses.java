package com.codesquad.issuetracker.label.dto;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Data;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Data(staticConstructor = "from")
public class LabelResponses {

    @JsonValue
    private final Set<LabelResponse> labelResponses;

    public static LabelResponses from(Collection<LabelResponse> labelResponses) {
        return new LabelResponses(new HashSet<>(labelResponses));
    }
}

package com.codesquad.issuetracker.comment;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Value;

@Value
@EqualsAndHashCode(of = "value")
@Builder
public class Emoji {
    private final String value;
    private final int count;
}

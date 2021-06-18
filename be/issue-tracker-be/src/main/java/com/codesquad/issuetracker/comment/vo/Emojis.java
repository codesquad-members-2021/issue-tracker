package com.codesquad.issuetracker.comment.vo;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Value;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Value(staticConstructor = "from")
public class Emojis {

    @JsonValue
    private final Set<Emoji> emojis;

    public static Emojis from(Collection<Emoji> emojis) {
        return new Emojis(new HashSet<>(emojis));
    }
}

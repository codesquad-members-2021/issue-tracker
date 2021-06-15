package com.codesquad.issuetracker.comment.vo;

import lombok.Value;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Value(staticConstructor = "from")
public class Emojis {
    private final Set<Emoji> emojis;

    public static Emojis from(Collection<Emoji> emojis) {
        return new Emojis(new HashSet<>(emojis));
    }
}

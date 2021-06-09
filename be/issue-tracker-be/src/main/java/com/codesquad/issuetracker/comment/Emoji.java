package com.codesquad.issuetracker.comment;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Objects;

@RequiredArgsConstructor
@Builder
@Getter
public class Emoji {
    private final String value;
    private final int count;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Emoji emoji = (Emoji) o;
        return Objects.equals(value, emoji.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}

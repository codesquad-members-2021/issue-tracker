package com.codesquad.issuetracker.image.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class Image {
    private final String url;

    public static Image of(String url) {
        return new Image(url);
    }
}

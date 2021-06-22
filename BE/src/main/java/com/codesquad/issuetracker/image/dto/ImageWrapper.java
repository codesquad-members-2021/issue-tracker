package com.codesquad.issuetracker.image.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class ImageWrapper {
    private final Image image;

    public static ImageWrapper wrap(Image image) {
        return new ImageWrapper(image);
    }
}

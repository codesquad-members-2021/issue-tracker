package com.issuetracker.s3;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ImageUrlResponseDto {
    @JsonProperty("image_url")
    private String imageUrl;

    public ImageUrlResponseDto(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getImageUrl() {
        return imageUrl;
    }
}

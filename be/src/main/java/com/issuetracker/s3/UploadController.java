package com.issuetracker.s3;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
public class UploadController {

    private final ImageService imageService;

    public UploadController(ImageService imageService) {
        this.imageService = imageService;
    }

    @PostMapping("/api/images")
    public ImageUrlResponseDto upload(@RequestParam("image") MultipartFile file) throws IOException {
        return imageService.upload(file);
    }
}

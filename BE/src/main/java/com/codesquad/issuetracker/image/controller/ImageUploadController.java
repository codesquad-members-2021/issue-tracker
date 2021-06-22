package com.codesquad.issuetracker.image.controller;

import com.codesquad.issuetracker.image.dto.ImageWrapper;
import com.codesquad.issuetracker.image.service.ImageUploadService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/images")
public class ImageUploadController {

    private final ImageUploadService imageUploadService;

    public ImageUploadController(ImageUploadService imageUploadService) {
        this.imageUploadService = imageUploadService;
    }

    @PostMapping
    public ImageWrapper uploadImage(MultipartFile image) {
        return imageUploadService.uploadImage(image);
    }

}

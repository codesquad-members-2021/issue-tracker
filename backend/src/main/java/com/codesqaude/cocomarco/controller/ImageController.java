package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.service.ImageService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/images")
@AllArgsConstructor
public class ImageController {

    private final ImageService imageService;
    private final static String S3_DIRECTORY_NAME = "static";

    @PostMapping
    public String upload(@RequestParam("data") MultipartFile multipartFile) throws IOException {
        return imageService.upload(multipartFile, S3_DIRECTORY_NAME);
    }
}


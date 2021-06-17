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
@RequestMapping("/image")
@AllArgsConstructor
public class ImageController {

    private final ImageService imageService;

    @PostMapping
    public String upload(@RequestParam("data") MultipartFile multipartFile) throws IOException {
        return imageService.upload(multipartFile, "static");
    }
}


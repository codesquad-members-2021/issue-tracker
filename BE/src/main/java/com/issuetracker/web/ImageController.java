package com.issuetracker.web;

import com.issuetracker.service.ImageService;
import com.issuetracker.web.dto.response.ImageResponseDTO;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class ImageController {

    private final ImageService imageService;
    private final Logger logger = LoggerFactory.getLogger(ImageController.class);

    @PostMapping("/api/images")
    public ImageResponseDTO upload(@RequestParam("image") MultipartFile multipartFile) {
        logger.debug("이미지 업로드 요청");
        return imageService.upload(multipartFile);
    }
}

package com.codesquad.issuetracker.image.service;

import com.codesquad.issuetracker.image.dto.Image;
import com.codesquad.issuetracker.image.dto.ImageWrapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageUploadService {
    public ImageWrapper uploadImage(MultipartFile image) {
        return ImageWrapper.wrap(Image.of(image.getName()));
    }
}

package com.codesquad.issuetracker.image.service;

import com.codesquad.issuetracker.image.component.S3Uploader;
import com.codesquad.issuetracker.image.dto.Image;
import com.codesquad.issuetracker.image.dto.ImageWrapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageUploadService {

    private final S3Uploader s3Uploader;

    public ImageUploadService(S3Uploader s3Uploader) {
        this.s3Uploader = s3Uploader;
    }

    public ImageWrapper uploadImage(MultipartFile image) {
        return ImageWrapper.wrap(Image.of(s3Uploader.upload(image)));
    }
}

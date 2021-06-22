package com.codesquad.issuetracker.image.component;

import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.IOException;

public class S3Uploader {

    private final S3Client s3;
    private final String bucketName;
    private final String bucketUrl;

    public S3Uploader(S3Client s3, String bucketName, String bucketUrl) {
        this.s3 = s3;
        this.bucketName = bucketName;
        this.bucketUrl = bucketUrl;
    }

    public String upload(MultipartFile multipartFile) {
        String objectKey = multipartFile.getOriginalFilename();
        try {
            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(objectKey)
                    .build();

            s3.putObject(putObjectRequest, RequestBody.fromInputStream(multipartFile.getInputStream(), multipartFile.getSize()));

        } catch (IOException ioException) {
            throw new RuntimeException("Image Upload Error", ioException);
        }

        return bucketUrl + objectKey;
    }
}

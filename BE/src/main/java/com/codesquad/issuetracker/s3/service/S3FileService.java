package com.codesquad.issuetracker.s3.service;

import com.codesquad.issuetracker.s3.domain.S3Client;
import com.codesquad.issuetracker.s3.exception.ImageUploadException;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.concurrent.CompletableFuture;

@Slf4j
@Service
@AllArgsConstructor
public class S3FileService {

    private final S3Client s3Client;

    public String upload(final MultipartFile file) {
        return uploadFileToS3(file);
    }

    private String uploadFileToS3(MultipartFile file) {
        final CompletableFuture future = CompletableFuture
                .supplyAsync(() -> s3Client.uploadJPGFile(getInputStream(file)));

        return String.valueOf(future.join());
    }

    private InputStream getInputStream(MultipartFile file) {
        try {
            return file.getInputStream();
        } catch (IOException e) {
            throw new ImageUploadException("Requested file cannot convert to InputStream format", e);
        }
    }

}

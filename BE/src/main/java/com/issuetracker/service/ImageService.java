package com.issuetracker.service;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.issuetracker.domain.image.Image;
import com.issuetracker.domain.image.ImageRepository;
import com.issuetracker.exception.InputStreamFormationException;
import com.issuetracker.web.dto.response.ImageResponseDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Service
public class ImageService {

    private final String accessKey;
    private final String secretKey;
    private final String bucket;
    private final String defaultUrl;
    private final ImageRepository imageRepository;

    public ImageService(@Value("${cloud.aws.credentials.accessKey}") String accessKey,
                        @Value("${cloud.aws.credentials.secretKey}") String secretKey,
                        @Value("${cloud.aws.s3.bucket}") String bucket,
                        @Value("${cloud.aws.s3.bucket.url}") String defaultUrl,
                        ImageRepository imageRepository) {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
        this.bucket = bucket;
        this.defaultUrl = defaultUrl;
        this.imageRepository = imageRepository;
    }

    public ImageResponseDTO upload(MultipartFile multipartFile) {
        ObjectMetadata data = new ObjectMetadata();
        data.setContentType(multipartFile.getContentType());
        data.setContentLength(multipartFile.getSize());

        BasicAWSCredentials credentials = new BasicAWSCredentials(accessKey, secretKey);
        AmazonS3 s3client = AmazonS3ClientBuilder.standard()
                .withRegion(Regions.AP_NORTHEAST_2)
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .build();

        String imageName = getImageName(multipartFile);
        try {
            s3client.putObject(bucket, imageName, multipartFile.getInputStream(), data);
        } catch (IOException e) {
            throw new InputStreamFormationException();
        }
        Image image = saveImageUrl(defaultUrl + "/" + imageName);
        return new ImageResponseDTO(image.getImageUrl());
    }

    private String getImageName(MultipartFile multipartFile) {
        String newName = UUID.randomUUID().toString();
        String originalFileName = multipartFile.getOriginalFilename();
        String extension = originalFileName.substring(originalFileName.lastIndexOf('.'));
        return newName + extension;
    }

    private Image saveImageUrl(String imageUrl) {
        return imageRepository.save(new Image(imageUrl));
    }
}

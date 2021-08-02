package com.codesquad.issuetracker.s3.domain;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.io.InputStream;
import java.util.UUID;

@Slf4j
@AllArgsConstructor(staticName = "create")
public class S3Client {

    private static final String FILE_EXTENSION = ".jpeg";
    private static final String CONTENT_TYPE = "image/jpeg";

    private final AmazonS3 amazonS3;
    private final String region;
    private final String bucketName;

    public String uploadJPGFile(InputStream inputStream) {
        String name = randomNameGenerator();
        return uploadFile(name, FILE_EXTENSION, inputStream, getMetadata(CONTENT_TYPE));
    }

    public String uploadFile(String filename, String extension, InputStream inputStream, ObjectMetadata metadata) {
        String key = filename + extension;

        PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, key, inputStream, metadata);
        putObjectRequest.setCannedAcl(CannedAccessControlList.PublicRead);
        amazonS3.putObject(putObjectRequest);

        String url = amazonS3.getUrl(bucketName, key).getPath();
        log.debug("Image url : {}", url);

        return getBaseS3Url() + url;
    }

    private String randomNameGenerator() {
        return UUID.randomUUID().toString();
    }

    private ObjectMetadata getMetadata(String contentType) {
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentType(contentType);
        return metadata;
    }

    private String getBaseS3Url() {
        return new StringBuilder()
                .append("https://")
                .append(bucketName)
                .append(".s3.")
                .append(region)
                .append(".amazonaws.com")
                .toString();
    }
}

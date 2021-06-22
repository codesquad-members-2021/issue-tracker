package com.codesquad.issuetracker.config;

;
import com.codesquad.issuetracker.image.component.S3Uploader;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.services.s3.S3Client;

@Configuration
public class AmazonS3Config {

    @Bean
    public S3Client s3Client() {
        return S3Client.builder().build();
    }

    @Bean
    public S3Uploader s3Uploader(S3Client s3Client,
                                 @Value("${image.bucket.name}") String bucketName,
                                 @Value("${image.bucket.url}") String bucketUrl) {
        return new S3Uploader(s3Client, bucketName, bucketUrl);
    }

}

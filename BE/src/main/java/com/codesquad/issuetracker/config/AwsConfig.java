package com.codesquad.issuetracker.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.codesquad.issuetracker.s3.domain.S3Client;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AwsConfig {

    private final String accessKey;
    private final String secretKey;
    private final String region;
    private final String bucket;

    public AwsConfig(@Value("${cloud.aws.s3.access-key}") String accessKey,
                     @Value("${cloud.aws.s3.secret-key}") String secretKey,
                     @Value("${cloud.aws.s3.region}") String region,
                     @Value("${cloud.aws.s3.bucket}") String bucket) {
        this.accessKey = accessKey;
        this.secretKey = secretKey;
        this.region = region;
        this.bucket = bucket;
    }

    @Bean
    public S3Client s3Client() {
        final AWSCredentials awsCredentials = new BasicAWSCredentials(accessKey, secretKey);
        final AmazonS3 amazonS3 = AmazonS3ClientBuilder
                .standard()
                .withRegion(region)
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .build();

        return S3Client.create(amazonS3, region, bucket);
    }
}

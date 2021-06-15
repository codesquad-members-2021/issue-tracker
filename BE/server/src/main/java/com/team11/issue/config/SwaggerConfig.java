package com.team11.issue.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.HashSet;
import java.util.Set;

@EnableSwagger2
@Configuration
public class SwaggerConfig {

    @Bean
    public Docket newsApi() {
        Set<String> responseContentType = new HashSet<>();
        responseContentType.add("application/json;charset=UTF-8");

        return new Docket(DocumentationType.SWAGGER_2)
                .host("ec2-52-79-56-138.ap-northeast-2.compute.amazonaws.com")
                .groupName("issue-tracker")
                .produces(responseContentType)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.ant("/api/**"))
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("issue-tracker API")
                .description("issue-tracker API")
                .license("Apache License Version 2.0")
                .version("2.0")
                .build();
    }
}

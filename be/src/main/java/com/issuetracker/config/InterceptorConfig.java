package com.issuetracker.config;

import com.issuetracker.oauth.OauthInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {

        registry.addInterceptor(new OauthInterceptor())
                .addPathPatterns("/api/**");
//                .excludePathPatterns("/api/login/**")
//                .excludePathPatterns("/api/accommodations/**");
    }
}

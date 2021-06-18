package com.issuetracker.config;

import com.issuetracker.oauth.OauthInterceptor;
import com.issuetracker.util.Oauth;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {
    private final Oauth oauthUtil;

    public InterceptorConfig(Oauth oauthUtil) {
        this.oauthUtil = oauthUtil;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {

        registry.addInterceptor(new OauthInterceptor(oauthUtil))
                .addPathPatterns("/api/**")
                .excludePathPatterns("/api/login/**");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000", "http://localhost:80");
    }
}

package com.codesqaude.cocomarco.common.config;

import com.codesqaude.cocomarco.common.auth.AuthInterceptor;
import com.codesqaude.cocomarco.common.auth.JwtKey;
import com.codesqaude.cocomarco.common.auth.UserIdHandlerMethodResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Bean
    public JwtKey jwtKey() {
        return new JwtKey();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new AuthInterceptor(jwtKey()))
                .addPathPatterns("/issues/**")
                .addPathPatterns("/milestones/**")
                .addPathPatterns("/labels/**");
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new UserIdHandlerMethodResolver(jwtKey()));
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000");
    }
}

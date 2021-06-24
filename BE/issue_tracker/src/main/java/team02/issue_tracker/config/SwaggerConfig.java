package team02.issue_tracker.config;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@Component
public class SwaggerConfig {

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("Team02 Issue Tracker API")
                .description("Spring API made by Yeon & Shion")
                .version("Beta")
                .build();
    }

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("issue tracker")
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("team02.issue_tracker"))
                .paths(PathSelectors.ant("/**"))
                .build();
    }

}

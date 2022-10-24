package com.hipmap.global.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket restAPI(){
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.hipmap.domain")) // 대상 패키지
//                .apis(RequestHandlerSelectors.any()) // 대상 패키지
                .paths(PathSelectors.any()) // 어떤 식으로 시작하는 api를 보여줄 것인지
                .build();
    }
}

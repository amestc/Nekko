package dev.nekko.LogicBackendNekko.Controller;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class FrontInit implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Serve arquivos da raiz do projeto Nekko
        registry.addResourceHandler("/**")
                .addResourceLocations("file:../");
    }
}
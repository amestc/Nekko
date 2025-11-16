package dev.nekko.LogicBackendNekko.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.File;

@Controller
public class FrontInit {

    @GetMapping("/")
    public ModelAndView serveIndex(HttpServletRequest request) {
        File indexFile = new File("index.html");

        if (indexFile.exists()) {
            // Retorna o arquivo diretamente
            return new ModelAndView("forward:/custom-index.html");
        }

        // Fallback para página padrão
        return new ModelAndView("index");
    }
}
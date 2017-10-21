package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by lulu on 2017/10/21.
 */
@Controller
public class HelloController {
    @RequestMapping("/hello")
    public String hello(){
        return "home";
    }
}

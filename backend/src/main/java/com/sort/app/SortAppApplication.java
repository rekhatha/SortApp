package com.sort.app;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;

@RestController
@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan({"com.sort"})
public class SortAppApplication {


    public static void main(String[] args) throws Exception {
        SpringApplication.run(SortAppApplication.class, args);
    }

}
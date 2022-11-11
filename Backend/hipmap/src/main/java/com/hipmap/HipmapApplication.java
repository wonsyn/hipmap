package com.hipmap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class HipmapApplication {

    public static void main(String[] args) {
        SpringApplication.run(HipmapApplication.class, args);
    }

}

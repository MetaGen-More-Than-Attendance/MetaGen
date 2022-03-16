package com.hst.metagen.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;


@RestController
@CrossOrigin
public class StudentController {

    @PostMapping("/camera")
    private String getCamera(@RequestBody String imageSrc){
        System.out.println("TEST");
        String uri = "http://127.0.0.1:5000/api";

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.postForObject(uri,imageSrc, String.class);
        System.out.println(result);
        return result;
    }


}

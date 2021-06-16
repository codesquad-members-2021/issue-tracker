package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.domain.oauth.dto.JwtResponse;
import com.codesqaude.cocomarco.domain.user.dto.UserWrapper;
import com.codesqaude.cocomarco.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    //클라이언트가
    @PostMapping("/git/login")
    public JwtResponse login(@RequestParam(name = "code") String code){
        return userService.login(code);
    }

    @GetMapping
    public UserWrapper findAll(){
        return userService.findAll();
    }
}

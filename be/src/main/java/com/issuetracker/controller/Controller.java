package com.issuetracker.controller;

import com.issuetracker.oauth.UserDto;
import com.issuetracker.service.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class Controller {
    private Service service;

    public Controller(Service service) {
        this.service = service;
    }

    @GetMapping("/assignees")
    public List<UserDto> viewAllAssignees() {
        return service.searchAllAssignees();
    }

    @GetMapping("/authors")
    public List<UserDto> viewAllAuthors() {
        return service.searchAllAuthors();
    }
}

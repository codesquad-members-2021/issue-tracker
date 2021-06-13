package com.codesqaude.cocomarco.controller;

import com.codesqaude.cocomarco.domain.issue.model.dto.IssueRequest;
import com.codesqaude.cocomarco.service.IssueService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.codesqaude.cocomarco.domain.user.User.SAMPLE_UUID;

@RestController
@RequestMapping("/issues")
@RequiredArgsConstructor
public class IssueController {

    private final IssueService issueService;

    @PostMapping
    public void create(@RequestBody IssueRequest issueRequest) {
        issueService.create(issueRequest, SAMPLE_UUID);
    }

}

package com.team11.issue.controller;

import com.team11.issue.dto.ResponseDTO;
import com.team11.issue.dto.issue.IssueRequestDTO;
import com.team11.issue.service.IssueService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RequestMapping("api")
@RestController
public class IssueController {

    private final IssueService issueService;
    private final Logger logger = LoggerFactory.getLogger(IssueController.class);

    @PostMapping("/issue")
    public ResponseEntity<ResponseDTO> createIssue(@RequestBody IssueRequestDTO issueRequestDTO, @RequestAttribute String userName) {
        issueService.createIssue(issueRequestDTO, userName);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }

}

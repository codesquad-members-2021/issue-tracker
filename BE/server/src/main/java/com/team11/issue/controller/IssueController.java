package com.team11.issue.controller;

import com.team11.issue.dto.ResponseDTO;
import com.team11.issue.dto.issue.*;
import com.team11.issue.service.IssueService;
import io.swagger.annotations.ApiParam;
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

    @GetMapping("/issues")
    public ResponseEntity<IssuesResponseDTO> showAllIssue(){
        return ResponseEntity.ok().body(issueService.showAllIssue());
    }

    @GetMapping("/issue/{issueId}")
    public ResponseEntity<IssueDetailResponseDTO> showIssue(@PathVariable Long issueId,
                                                            @ApiParam(hidden=true) @RequestAttribute String userName){
        return ResponseEntity.ok().body(issueService.showIssue(issueId,userName));
    }

    @PostMapping("/issue")
    public ResponseEntity<ResponseDTO> createIssue(@RequestBody IssueRequestDTO issueRequestDTO,
                                                   @ApiParam(hidden=true) @RequestAttribute String userName) {
        issueService.createIssue(issueRequestDTO, userName);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }

    @PutMapping("/issues/status")
    public ResponseEntity<ResponseDTO> changeIssueStatus(@RequestBody IssueChangeStatusRequestDTO issueChangeStatusRequestDTO,
                                                         @ApiParam(hidden=true) @RequestAttribute String userName) {
        issueService.changeIssueStatus(issueChangeStatusRequestDTO, userName);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }

    @PutMapping("/issue/{issueId}")
    public ResponseEntity<ResponseDTO> updateIssue(@PathVariable Long issueId,
                                                   @RequestBody IssueRequestDTO issueRequestDTO,
                                                   @ApiParam(hidden=true) @RequestAttribute String userName) {
        issueService.updateIssue(issueId, issueRequestDTO, userName);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }

    @DeleteMapping("/issue/{issueId}")
    public ResponseEntity<ResponseDTO> deleteIssue(@PathVariable Long issueId,
                                                   @ApiParam(hidden=true) @RequestAttribute String userName) {
        issueService.deleteIssue(issueId, userName);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }

}

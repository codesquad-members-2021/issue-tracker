package com.jane_eno.issue_tracker.web;

import com.jane_eno.issue_tracker.service.IssueService;
import com.jane_eno.issue_tracker.web.dto.reqeust.IssueNumbersRequestDTO;
import com.jane_eno.issue_tracker.web.dto.response.IssueFormResponseDTO;
import com.jane_eno.issue_tracker.web.dto.response.IssuesResponseDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class IssueController {

    public final IssueService issueService;
    private final Logger logger = LoggerFactory.getLogger(IssueController.class);

    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    @GetMapping("/issues")
    public IssuesResponseDTO viewIssues(@RequestParam String status) {
        logger.info("모든 이슈 조회");
        return issueService.getIssues(status);
    }

    @PatchMapping("/issues")
    public void changeIssueStatus(@RequestBody IssueNumbersRequestDTO requestDTO) {
        logger.info("이슈 닫기 or 열기");
        issueService.changeIssueStatus(requestDTO);
    }

    @GetMapping("/issues/form")
    public IssueFormResponseDTO viewIssueForm() {
        logger.info("이슈 생성 페이지 요청");
        return issueService.getIssueForm();
    }
}

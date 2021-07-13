package com.issuetracker.web;

import com.issuetracker.auth.annotation.LoginRequired;
import com.issuetracker.service.MilestoneService;
import com.issuetracker.web.dto.reqeust.MilestoneNumbersRequestDTO;
import com.issuetracker.web.dto.response.MilestoneDTO;
import com.issuetracker.web.dto.response.MilestonesResponseDTO;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/milestones")
@RequiredArgsConstructor
public class MilestoneController {

    private final MilestoneService milestoneService;
    private final Logger logger = LoggerFactory.getLogger(MilestoneService.class);

    @GetMapping
    public MilestonesResponseDTO read(@RequestParam String status) {
        logger.debug("모든 마일스톤 조회");
        return milestoneService.read(status);
    }

    @LoginRequired
    @PostMapping
    public void create(@RequestBody MilestoneDTO milestone) {
        logger.debug("마일스톤 생성");
        milestoneService.create(milestone);
    }

    @LoginRequired
    @PatchMapping
    public void close(@RequestBody MilestoneNumbersRequestDTO milestoneNumbersRequestDTO, @RequestParam String status) {
        logger.debug("마일스톤 닫기 or 열기");
        milestoneService.changeMilestoneStatus(milestoneNumbersRequestDTO, status);
    }

    @LoginRequired
    @PatchMapping("/{milestoneId}")
    public void update(@PathVariable Long milestoneId, @RequestBody MilestoneDTO milestone) {
        logger.debug("마일스톤 수정");
        milestoneService.update(milestoneId, milestone);
    }

    @LoginRequired
    @DeleteMapping("/{milestoneId}")
    public void delete(@PathVariable Long milestoneId) {
        logger.debug("마일스톤 삭제");
        milestoneService.delete(milestoneId);
    }
}

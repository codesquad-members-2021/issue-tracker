package com.jane_eno.issue_tracker.web;

import com.jane_eno.issue_tracker.service.MilestoneService;
import com.jane_eno.issue_tracker.web.dto.response.Milestone;
import com.jane_eno.issue_tracker.web.dto.response.MilestonesResponseDTO;
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
    public MilestonesResponseDTO read() {
        logger.debug("모든 마일스톤 조회");
        return milestoneService.read();
    }

    @PostMapping
    public void create(@RequestBody Milestone milestone) {
        logger.debug("마일스톤 생성");
        logger.debug("마일스톤 생성 요청 확인: {}", milestone.toString());
        milestoneService.create(milestone);
    }

    @PatchMapping("/{milestoneId}")
    public void update(@PathVariable Long milestoneId, @RequestBody Milestone milestone) {
        logger.debug("마일스톤 수정");
        logger.debug("마일스톤 생성 요청 확인: {}", milestone.toString());
        milestoneService.update(milestoneId, milestone);
    }

    @DeleteMapping("/{milestoneId}")
    public void delete(@PathVariable Long milestoneId) {
        logger.debug("마일스톤 삭제");
        milestoneService.delete(milestoneId);
    }
}

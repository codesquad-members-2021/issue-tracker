package com.team11.issue.controller;

import com.team11.issue.dto.ResponseDTO;
import com.team11.issue.dto.milestone.MilestoneRequestDTO;
import com.team11.issue.dto.milestone.MilestoneResponseDTO;
import com.team11.issue.dto.milestone.MilestonesResponseDTO;
import com.team11.issue.service.MilestoneService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RequestMapping("api")
@RestController
public class MilestoneController {

    private final MilestoneService milestoneService;
    private final Logger logger = LoggerFactory.getLogger(MilestoneController.class);

    @GetMapping("/milestones")
    public ResponseEntity<MilestonesResponseDTO> showAllMilestone() {
        logger.info("마일스톤 전체목록 조회 요청");
        return ResponseEntity.ok().body(milestoneService.showAllMilestone());
    }

    @GetMapping("/milestone/{milestoneId}")
    public ResponseEntity<MilestoneResponseDTO> showMilestone(@PathVariable Long milestoneId) {
        logger.info("마일스톤 상세조회 요청");
        return ResponseEntity.ok().body(milestoneService.showMilestone(milestoneId));
    }

    @PostMapping("/milestone")
    public ResponseEntity<ResponseDTO> createMilestone(@RequestBody MilestoneRequestDTO milestoneRequestDTO) {
        logger.info("마일스톤 등록 요청");
        milestoneService.createMilestone(milestoneRequestDTO);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }

    @PutMapping("/milestone/{milestoneId}")
    public ResponseEntity<ResponseDTO> updateMilestone(@PathVariable Long milestoneId,
                                                       @RequestBody MilestoneRequestDTO milestoneRequestDTO) {
        logger.info("마일스톤 수정 요청");
        milestoneService.updateMilestone(milestoneId, milestoneRequestDTO);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }

    @DeleteMapping("/milestone/{milestoneId}")
    public ResponseEntity<ResponseDTO> deleteMilestone(@PathVariable Long milestoneId) {
        logger.info("마일스톤 삭제 요청");
        milestoneService.deleteMilestone(milestoneId);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }

}

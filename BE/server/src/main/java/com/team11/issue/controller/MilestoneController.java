package com.team11.issue.controller;

import com.team11.issue.dto.ResponseDTO;
import com.team11.issue.dto.milestone.MilestoneRequestDTO;
import com.team11.issue.service.MilestoneService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("api")
@RestController
public class MilestoneController {

    private final MilestoneService milestoneService;
    private final Logger logger = LoggerFactory.getLogger(MilestoneController.class);

    @PostMapping("/milestone")
    public ResponseEntity<ResponseDTO> createMilestone(@RequestBody MilestoneRequestDTO milestoneRequestDTO) {
        milestoneService.createMilestone(milestoneRequestDTO);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }

}

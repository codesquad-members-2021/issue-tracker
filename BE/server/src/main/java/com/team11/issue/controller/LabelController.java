package com.team11.issue.controller;

import com.team11.issue.dto.ResponseDTO;
import com.team11.issue.dto.label.LabelRequestDTO;
import com.team11.issue.service.LabelService;
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
public class LabelController {

    private final LabelService labelService;
    private final Logger logger = LoggerFactory.getLogger(LabelController.class);

    @PostMapping("/label")
    public ResponseEntity<ResponseDTO> createLabel(@RequestBody LabelRequestDTO labelRequestDTO) {
        labelService.createLabel(labelRequestDTO);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }


}

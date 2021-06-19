package com.team11.issue.controller;

import com.team11.issue.dto.ResponseDTO;
import com.team11.issue.dto.label.LabelRequestDTO;
import com.team11.issue.dto.label.LabelResponseDTO;
import com.team11.issue.dto.label.LabelsResponseDTO;
import com.team11.issue.service.LabelService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RequestMapping("api")
@RestController
public class LabelController {

    private final LabelService labelService;
    private final Logger logger = LoggerFactory.getLogger(LabelController.class);

    @GetMapping("/labels")
    public ResponseEntity<LabelsResponseDTO> showAllLabel() {
        return ResponseEntity.ok().body(labelService.showAllLabel());
    }

    @GetMapping("/label/{labelId}")
    public ResponseEntity<LabelResponseDTO> showLabel(@PathVariable Long labelId) {
        return ResponseEntity.ok().body(labelService.showLabel(labelId));
    }

    @PostMapping("/label")
    public ResponseEntity<ResponseDTO> createLabel(@RequestBody LabelRequestDTO labelRequestDTO) {
        labelService.createLabel(labelRequestDTO);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }

    @PutMapping("/label/{labelId}")
    public ResponseEntity<ResponseDTO> updateLabel(@PathVariable Long labelId, @RequestBody LabelRequestDTO labelRequestDTO) {
        labelService.updateLabel(labelId, labelRequestDTO);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }

    @DeleteMapping("/label/{labelId}")
    public ResponseEntity<ResponseDTO> deleteLabel(@PathVariable Long labelId) {
        labelService.deleteLabel(labelId);
        return ResponseEntity.ok().body(new ResponseDTO("OK"));
    }


}

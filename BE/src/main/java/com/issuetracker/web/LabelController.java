package com.issuetracker.web;

import com.issuetracker.auth.annotation.LoginRequired;
import com.issuetracker.service.LabelService;
import com.issuetracker.web.dto.response.LabelDTO;
import com.issuetracker.web.dto.response.LabelsResponseDTO;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/labels")
@RequiredArgsConstructor
public class LabelController {

    private final LabelService labelService;
    private final Logger logger = LoggerFactory.getLogger(LabelController.class);

    @GetMapping
    public LabelsResponseDTO read() {
        logger.debug("모든 라벨 조회");
        return labelService.read();
    }

    @LoginRequired
    @PostMapping
    public void create(@RequestBody LabelDTO label) {
        logger.debug("라벨 생성");
        labelService.create(label);
    }

    @LoginRequired
    @PatchMapping("/{labelId}")
    public void update(@PathVariable Long labelId, @RequestBody LabelDTO label) {
        logger.debug("라벨 편집");
        labelService.update(labelId, label);
    }

    @LoginRequired
    @DeleteMapping("/{labelId}")
    public void delete(@PathVariable Long labelId) {
        logger.debug("라벨 삭제");
        labelService.delete(labelId);
    }
}

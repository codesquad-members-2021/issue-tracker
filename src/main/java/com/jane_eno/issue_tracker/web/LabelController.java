package com.jane_eno.issue_tracker.web;

import com.jane_eno.issue_tracker.service.LabelService;
import com.jane_eno.issue_tracker.web.dto.response.LabelDTO;
import com.jane_eno.issue_tracker.web.dto.response.LabelsResponseDTO;
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

    @PostMapping
    public void create(@RequestBody LabelDTO label) {
        logger.debug("라벨 생성");
        logger.debug("라벨 생성 요청 확인: {}", label.toString());
        labelService.create(label);
    }

    @PatchMapping("/{labelId}")
    public void update(@PathVariable Long labelId, @RequestBody LabelDTO label) {
        logger.debug("라벨 편집");
        logger.debug("라벨 편집 요청 확인: {}", label);
        labelService.update(labelId, label);
    }

    @DeleteMapping("/{labelId}")
    public void delete(@PathVariable Long labelId) {
        logger.debug("라벨 삭제");
        labelService.delete(labelId);
    }
}

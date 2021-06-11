package com.jane_eno.issue_tracker.service;

import com.jane_eno.issue_tracker.domain.issue.Issue;
import com.jane_eno.issue_tracker.domain.label.Color;
import com.jane_eno.issue_tracker.domain.label.Label;
import com.jane_eno.issue_tracker.domain.label.LabelRepository;
import com.jane_eno.issue_tracker.exception.ElementNotFoundException;
import com.jane_eno.issue_tracker.web.dto.response.LabelsResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.jane_eno.issue_tracker.web.dto.response.LabelDTO;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LabelService {

    private final LabelRepository labelRepository;
    private final MilestoneService milestoneService;

    public List<Label> findLabels(List<Long> assigneeIdList) {
        return labelRepository.findAllById(assigneeIdList);
    }

    public List<LabelDTO> findAllLabelDTOs() {
        return labelRepository.findAll().stream().map(LabelDTO::of).collect(Collectors.toList());
    }

    private Label findByLabelId(Long labelId) {
        return labelRepository.findById(labelId).orElseThrow(
                () -> new ElementNotFoundException("Cannot find label by given id.")
        );
    }

    public LabelsResponseDTO read() {
        return LabelsResponseDTO.builder()
                .labelsCount((int) count())
                .milestonesCount((int) milestoneService.count())
                .labels(findAllLabelDTOs())
                .build();
    }

    public void create(LabelDTO label) {
        labelRepository.save(Label.createLabel(label));
    }

    public void update(Long labelId, LabelDTO labelDTO) {
    }

    public void delete(Long labelId) {

    }

    public long count() {
        return labelRepository.count();
    }

    public List<LabelDTO> labelsToLabelDTOs(Issue issue) {
        return labelRepository.findAll().stream()
                .map(label -> LabelDTO.of(label, issue))
                .collect(Collectors.toList());
    }
}

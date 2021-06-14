package com.issuetracker.service;

import com.issuetracker.web.dto.response.LabelDTO;
import com.issuetracker.domain.issue.Issue;
import com.issuetracker.domain.label.Label;
import com.issuetracker.domain.label.LabelRepository;
import com.issuetracker.domain.milestone.MilestoneRepository;
import com.issuetracker.exception.ElementNotFoundException;
import com.issuetracker.web.dto.response.LabelsResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LabelService {

    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;

    public List<Label> findLabels(List<Long> labelIds) {
        return labelRepository.findAllById(labelIds);
    }

    public LabelsResponseDTO read() {
        return LabelsResponseDTO.builder()
                .labelsCount((int) count())
                .milestonesCount((int) milestoneRepository.count())
                .labels(findAllLabelDTOs())
                .build();
    }

    public void create(LabelDTO label) {
        labelRepository.save(Label.create(label));
    }

    public void update(Long labelId, LabelDTO newLabelInfo) {
        Label label = findLabelById(labelId);
        label.update(newLabelInfo);
        labelRepository.save(label);
    }

    public void delete(Long labelId) {
        labelRepository.deleteById(labelId);
    }

    public List<LabelDTO> findAllLabelDTOs() {
        return labelRepository.findAll().stream()
                .map(LabelDTO::of)
                .collect(Collectors.toList());
    }

    private Label findLabelById(Long id) {
        return labelRepository.findById(id).orElseThrow(
                () -> new ElementNotFoundException("Cannot find label by given id.")
        );
    }

    public List<LabelDTO> labelsToLabelDTOs(Issue issue) {
        return labelRepository.findAll().stream()
                .map(label -> LabelDTO.of(label, checkLabels(label, issue)))
                .collect(Collectors.toList());
    }

    private boolean checkLabels(Label targetLabel, Issue issue) {
        long count = issue.getLabels().stream()
                .filter(label -> label.equals(targetLabel))
                .count();
        return count > 0;
    }

    public long count() {
        return labelRepository.count();
    }
}

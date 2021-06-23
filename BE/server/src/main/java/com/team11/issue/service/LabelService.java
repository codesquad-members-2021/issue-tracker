package com.team11.issue.service;

import com.team11.issue.domain.Label;
import com.team11.issue.dto.label.LabelRequestDTO;
import com.team11.issue.dto.label.LabelResponseDTO;
import com.team11.issue.dto.label.LabelsResponseDTO;
import com.team11.issue.exception.LabelNotFoundException;
import com.team11.issue.repository.LabelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class LabelService {

    private final LabelRepository labelRepository;

    private Label findLabel(Long labelId) {
        return labelRepository.findById(labelId).orElseThrow(LabelNotFoundException::new);
    }

    public void createLabel(LabelRequestDTO labelRequestDTO) {
        labelRepository.save(Label.createLabel(labelRequestDTO));
    }

    public void updateLabel(Long labelId, LabelRequestDTO labelRequestDTO) {
        Label label = findLabel(labelId);
        label.updateLabel(labelRequestDTO);
        labelRepository.save(label);
    }

    public void deleteLabel(Long labelId) {
        labelRepository.delete(findLabel(labelId));
    }

    public LabelResponseDTO showLabel(Long labelId) {
        return LabelResponseDTO.from(findLabel(labelId));
    }

    public LabelsResponseDTO showAllLabel() {
        List<LabelResponseDTO> labels = labelRepository.findAll().stream()
                .map(label -> LabelResponseDTO.from(label))
                .collect(Collectors.toList());

        return LabelsResponseDTO.from(labels);
    }
}

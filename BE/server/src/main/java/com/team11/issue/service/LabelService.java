package com.team11.issue.service;

import com.team11.issue.domain.Label;
import com.team11.issue.dto.label.LabelRequestDTO;
import com.team11.issue.repository.LabelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class LabelService {

    private final LabelRepository labelRepository;

    private Label findLabel(Long labelId) {
        return labelRepository.findById(labelId).orElseThrow(RuntimeException::new);
    }

    public void createLabel(LabelRequestDTO labelRequestDTO) {
        labelRepository.save(Label.createLabel(labelRequestDTO));
    }

    public void updateLabel(Long labelId, LabelRequestDTO labelRequestDTO) {
        Label label = findLabel(labelId);
        label.updateLabel(labelRequestDTO);
        labelRepository.save(label);
    }
}

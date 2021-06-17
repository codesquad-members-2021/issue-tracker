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

    public void createLabel(LabelRequestDTO labelRequestDTO) {
        labelRepository.save(Label.createLabel(labelRequestDTO));
    }
}

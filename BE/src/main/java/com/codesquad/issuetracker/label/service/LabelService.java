package com.codesquad.issuetracker.label.service;

import com.codesquad.issuetracker.label.domain.Label;
import com.codesquad.issuetracker.label.dto.LabelRequest;
import com.codesquad.issuetracker.label.dto.LabelDto;
import com.codesquad.issuetracker.label.repository.LabelRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class LabelService {

    private final LabelRepository labelRepository;

    public LabelService(LabelRepository labelRepository) {
        this.labelRepository = labelRepository;
    }

    public List<LabelDto> labels() {
        return labelRepository.findAll().stream()
                .map(LabelDto::fromEntity)
                .collect(Collectors.toList());
    }

    public LabelDto create(LabelRequest newLabel) {
        return LabelDto.fromEntity(labelRepository.save(newLabel.toEntity()));
    }

    public LabelDto update(UUID id, LabelRequest updatingLabelInfo) {
        Label updatingLabel = labelRepository.findById(id)
                //TODO: Exception
                .orElseThrow(() -> new RuntimeException("Not Found"));
        updatingLabel.update(updatingLabelInfo.toEntity());

        return LabelDto.fromEntity(updatingLabel);
    }

    public void delete(UUID id) {
        Label deletingLabel = labelRepository.findById(id)
                //TODO: Exception
                .orElseThrow(() -> new RuntimeException("Not Found"));
        labelRepository.delete(deletingLabel);
    }
}

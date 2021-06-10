package com.codesquad.issuetracker.label.service;

import com.codesquad.issuetracker.label.domain.Label;
import com.codesquad.issuetracker.label.dto.LabelDto;
import com.codesquad.issuetracker.label.dto.LabelRequest;
import com.codesquad.issuetracker.label.dto.LabelWrapper;
import com.codesquad.issuetracker.label.dto.LabelsWrapper;
import com.codesquad.issuetracker.label.repository.LabelRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class LabelService {

    private final LabelRepository labelRepository;

    public LabelService(LabelRepository labelRepository) {
        this.labelRepository = labelRepository;
    }

    public LabelsWrapper labels() {
        return LabelsWrapper.wrap(labelRepository.findAll().stream()
                .map(LabelDto::fromEntity)
                .collect(Collectors.toList()));
    }

    public LabelWrapper create(LabelRequest newLabel) {
        return LabelWrapper.wrap(LabelDto.fromEntity(labelRepository.save(newLabel.toEntity())));
    }

    @Transactional
    public LabelWrapper update(UUID id, LabelRequest updatingLabelInfo) {
        Label updatingLabel = labelRepository.findById(id)
                //TODO: Exception
                .orElseThrow(() -> new RuntimeException("Not Found"));
        updatingLabel.update(updatingLabelInfo.toEntity());

        return LabelWrapper.wrap(LabelDto.fromEntity(updatingLabel));
    }

    public void delete(UUID id) {
        Label deletingLabel = labelRepository.findById(id)
                //TODO: Exception
                .orElseThrow(() -> new RuntimeException("Not Found"));
        labelRepository.delete(deletingLabel);
    }
}

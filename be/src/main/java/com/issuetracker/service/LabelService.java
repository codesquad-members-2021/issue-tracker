package com.issuetracker.service;

import com.issuetracker.dto.LabelDto;
import com.issuetracker.dto.ResponseStatusDto;
import com.issuetracker.repository.LabelRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LabelService {
    private LabelRepository labelRepository;

    public LabelService(LabelRepository labelRepository) {
        this.labelRepository = labelRepository;
    }


    public List<LabelDto> searchAllLabels() {
        return labelRepository.findAll().stream()
                .map(label -> LabelDto.of(label))
                .collect(Collectors.toList());
    }

    public ResponseStatusDto create(LabelDto labelDto) {
        labelRepository.create(labelDto);
        return new ResponseStatusDto("success");
    }

    public ResponseStatusDto edit(Long id, LabelDto labelDto) {
        labelRepository.edit(id, labelDto);
        return new ResponseStatusDto("success");
    }
}

package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.Label;
import com.codesquad.issuetracker.repository.LabelRepository;
import com.codesquad.issuetracker.response.LabelResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class LabelService {

    private final LabelRepository labelRepository;

    public LabelService(LabelRepository labelRepository) {
        this.labelRepository = labelRepository;
    }

    @Transactional
    public void create(Label label) {
        labelRepository.save(label);
    }


    public List<LabelResponse> getLabels() {
        return labelRepository.findAll().stream()
                .map(label -> LabelResponse.create(label))
                .collect(Collectors.toList());
    }
}

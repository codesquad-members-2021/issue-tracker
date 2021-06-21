package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.Label;
import com.codesquad.issuetracker.repository.LabelRepository;
import com.codesquad.issuetracker.request.LabelRequest;
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
    public LabelResponse create(Label label) {
        return LabelResponse.create(labelRepository.save(label));
    }


    public List<LabelResponse> getLabels() {
        return labelRepository.findAll().stream()
                .map(label -> LabelResponse.create(label))
                .collect(Collectors.toList());
    }

    @Transactional
    public void edit(Long labelId, LabelRequest labelRequest){
        Label label = labelRepository.getById(labelId);
        label.update(labelRequest);
        labelRepository.save(label);
    }
}

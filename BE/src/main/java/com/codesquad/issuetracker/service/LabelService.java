package com.codesquad.issuetracker.service;

import com.codesquad.issuetracker.domain.Label;
import com.codesquad.issuetracker.repository.LabelRepository;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class LabelService {

    private final LabelRepository labelRepository;

    public LabelService(LabelRepository labelRepository) {
        this.labelRepository = labelRepository;
    }

    public Set<Label> getLabelsForIssue(Long issueId) {
        Set<Label> labels = labelRepository.findByIssueId(issueId);
        for(Label label : labels) {
            System.out.println(label);
        }
        return labels;
    }
}

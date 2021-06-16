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


}

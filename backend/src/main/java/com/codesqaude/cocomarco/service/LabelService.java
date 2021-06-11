package com.codesqaude.cocomarco.service;

import com.codesqaude.cocomarco.common.exception.NotFoundLabelException;
import com.codesqaude.cocomarco.domain.label.*;
import com.codesqaude.cocomarco.domain.label.dto.LabelRequest;
import com.codesqaude.cocomarco.domain.label.dto.LabelResponse;
import com.codesqaude.cocomarco.domain.label.dto.LabelWrapper;
import com.codesqaude.cocomarco.domain.milestone.MilestoneRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Transactional(readOnly = true)
public class LabelService {

    private LabelRepository labelRepository;
    private MilestoneRepository milestoneRepository;

    public Label findById(Long labelId){
        return labelRepository.findById(labelId).orElseThrow(NotFoundLabelException::new);
    }

    public LabelWrapper findAll(Pageable pageable){
        Page<Label> labelPage = labelRepository.findAll(pageable);
        List<LabelResponse> labelResponses = labelPage.stream().map(LabelResponse::of).collect(Collectors.toList());
        return new LabelWrapper(labelResponses, milestoneRepository.count());
    }

    @Transactional
    public void create(LabelRequest labelRequest){
        labelRepository.save(labelRequest.toEntity());
    }

    @Transactional
    public void modify(Long labelId, LabelRequest labelRequest){
        Label label = findById(labelId);
        label.modify(labelRequest.toEntity());
        labelRepository.save(label);
    }

    @Transactional
    public void delete(Long labelId){
        labelRepository.delete(findById(labelId));
    }

}

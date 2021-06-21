package com.issuetracker.service;

import com.issuetracker.dto.LabelDto;
import com.issuetracker.dto.ResponseStatusDto;
import com.issuetracker.repository.IssueRepository;
import com.issuetracker.repository.LabelRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LabelService {
    private LabelRepository labelRepository;
    private IssueRepository issueRepository;

    public LabelService(LabelRepository labelRepository, IssueRepository issueRepository) {
        this.labelRepository = labelRepository;
        this.issueRepository = issueRepository;
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

    @Transactional
    public ResponseStatusDto delete(Long id) {
        issueRepository.deleteIssueIdsConnectedByLabelId(id);
        labelRepository.delete(id);
        return new ResponseStatusDto("success");
    }
}

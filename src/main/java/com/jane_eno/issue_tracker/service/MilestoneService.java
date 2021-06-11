package com.jane_eno.issue_tracker.service;

import com.jane_eno.issue_tracker.domain.milestone.Milestone;
import com.jane_eno.issue_tracker.domain.milestone.MilestoneRepository;
import com.jane_eno.issue_tracker.web.dto.response.MilestoneDTO;
import com.jane_eno.issue_tracker.web.dto.response.MilestonesResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityExistsException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MilestoneService {

    private final MilestoneRepository milestoneRepository;

    public Milestone findMilestoneById(Long milestoneId) {
        return milestoneRepository.findById(milestoneId).orElseThrow(EntityExistsException::new);
    }

    public List<MilestoneDTO> findAllMilestoneDTOs() {
        return milestoneRepository.findAll().stream().map(MilestoneDTO::of).collect(Collectors.toList());
    }

    public MilestonesResponseDTO read() {
        return MilestonesResponseDTO.builder()
                .labelsCount(3)
                .milestonesCount(4)
                .milestones(new ArrayList<>(Arrays.asList(
                        new MilestoneDTO(1L, "마일스톤 제목", "레이블에 대한 설명", LocalDateTime.now(), null, 3L, 1L),
                        new MilestoneDTO(2L, "로그인 하기", "내일까지 끝내야 한다.", LocalDateTime.now(), null, 4L, 5L)
                )))
                .build();
    }

    public void create(MilestoneDTO milestone) {
        milestoneRepository.save(Milestone.create(milestone));
    }

    public void update(Long milestoneId, MilestoneDTO milestone) {

    }

    public void delete(Long milestoneId) {

    }

    public long count() {
        return milestoneRepository.count();
    }
}

package com.jane_eno.issue_tracker.service;

import com.jane_eno.issue_tracker.web.dto.response.Milestone;
import com.jane_eno.issue_tracker.web.dto.response.MilestonesResponseDTO;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;

@Service
public class MilestoneService {

    public MilestonesResponseDTO read() {
        return MilestonesResponseDTO.builder()
                .labelsCount(3)
                .milestonesCount(4)
                .milestones(new ArrayList<>(Arrays.asList(
                        new Milestone(1L, "마일스톤 제목", "레이블에 대한 설명", LocalDateTime.now(), null, 3, 1),
                        new Milestone(2L, "로그인 하기", "내일까지 끝내야 한다.", LocalDateTime.now(), null, 4, 5)
                )))
                .build();
    }

    public void create(Milestone milestone) {

    }

    public void update(Long milestoneId, Milestone milestone) {

    }

    public void delete(Long milestoneId) {

    }
}

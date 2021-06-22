package com.codesquad.issuetracker.milestone.domain;


import com.codesquad.issuetracker.milestone.infra.MilestoneRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

@DataJpaTest
public class MilestoneTest {

    @Autowired
    private MilestoneRepository milestoneRepository;

    @AfterEach
    public void cleanup() {
        milestoneRepository.deleteAll();

    }

    @Test
    @DisplayName("milestone이 추가되었는지를 확인한다.")
    public void createMilestone() {
        String name = "제목";
        String description = "세부설명";

        Milestone milestone = Milestone
                .create("제목", "세부설명", LocalDate.now());

        milestoneRepository.save(milestone);

        List<Milestone> milestoneList = milestoneRepository.findAll();

        Milestone milestoneInDb = milestoneList.get(0);

        assertThat(milestoneInDb.getTitle()).isEqualTo(name);
        assertThat(milestoneInDb.getDescription()).isEqualTo(description);
    }
}

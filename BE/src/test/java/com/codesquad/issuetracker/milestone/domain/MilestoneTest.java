package com.codesquad.issuetracker.milestone.domain;


import com.codesquad.issuetracker.milestone.infra.MilestoneRepository;
import org.junit.After;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.swing.text.html.parser.Entity;
import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

@DataJpaTest
public class MilestoneTest {

    @Autowired
    MilestoneRepository milestoneRepository;

    @After
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

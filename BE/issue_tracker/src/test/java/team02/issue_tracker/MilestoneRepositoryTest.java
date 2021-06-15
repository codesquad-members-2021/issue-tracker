package team02.issue_tracker;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team02.issue_tracker.domain.Milestone;
import team02.issue_tracker.repository.MilestoneRepository;

import java.util.List;

@SpringBootTest
@Transactional
public class MilestoneRepositoryTest {

    @Autowired
    private MilestoneRepository milestoneRepository;

    @Test
    @DisplayName("findOpenMilestones 메소드가 잘 동작하는지 확인한다.")
    void findOpenMilestone() {
        List<Milestone> milestones = milestoneRepository.findOpenMilestones();
        Assertions.assertThat(milestones.size()).isEqualTo(2);
    }

    @Test
    @DisplayName("findClosedMilestones 메소드가 잘 동작하는지 확인한다.")
    void findClosedMilestone() {
        List<Milestone> milestones = milestoneRepository.findClosedMilestones();
        Assertions.assertThat(milestones.size()).isEqualTo(1);
    }
}

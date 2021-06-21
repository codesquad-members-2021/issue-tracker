package team02.issue_tracker;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team02.issue_tracker.domain.Milestone;
import team02.issue_tracker.exception.MilestoneNotFoundException;
import team02.issue_tracker.repository.MilestoneRepository;

import java.util.List;

@SpringBootTest
@Transactional
public class MilestoneRepositoryTest {

    @Autowired
    private MilestoneRepository milestoneRepository;

    @Test
    @DisplayName("findByDeleted 메소드가 잘 동작하는지 확인한다.")
    void findByDeleted() {
        List<Milestone> milestones = milestoneRepository.findByDeletedFalse();

        Assertions.assertThat(milestones.size()).isEqualTo(3);
    }

    @Test
    @DisplayName("findByOpenTrueAndDeletedFalse 메소드가 잘 동작하는지 확인한다.")
    void findByOpenTrueAndDeletedFalse() {
        List<Milestone> milestones = milestoneRepository.findByOpenTrueAndDeletedFalse();

        Assertions.assertThat(milestones.size()).isEqualTo(2);
    }

    @Test
    @DisplayName("findByOpenFalseAndDeletedFalse 메소드가 잘 동작하는지 확인한다.")
    void findByOpenFalseAndDeletedFalse() {
        List<Milestone> milestones = milestoneRepository.findByOpenFalseAndDeletedFalse();

        Assertions.assertThat(milestones.size()).isEqualTo(1);
    }

    @Test
    @DisplayName("마일스톤에서 이슈의 개수가 올바르게 반환되는지 확인한다.")
    void getIssueCount() {
        Milestone milestone = milestoneRepository.findByIdAndDeletedFalse(1L).orElseThrow(MilestoneNotFoundException::new);
        int issueCount = milestone.getTotalIssueCount();
        int openIssueCount = milestone.getOpenIssueCount();

        Assertions.assertThat(issueCount).isEqualTo(1);
        Assertions.assertThat(openIssueCount).isEqualTo(1);
    }
}

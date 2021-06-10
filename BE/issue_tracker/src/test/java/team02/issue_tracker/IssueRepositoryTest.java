package team02.issue_tracker;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.repository.IssueRepository;

import java.util.List;

@SpringBootTest
public class IssueRepositoryTest {

    @Autowired
    private IssueRepository issueRepository;

    @Test
    @DisplayName("issueRepository에서 전체 issue가 잘 반환되는지 확인한다.")
    void findAll() {
        List<Issue> issues = issueRepository.findAll();
        Assertions.assertThat(issues.size()).isEqualTo(1);
    }
}

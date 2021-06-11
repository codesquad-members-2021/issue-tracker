package team02.issue_tracker;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.exception.IssueNotFoundException;
import team02.issue_tracker.repository.IssueRepository;

import java.util.List;

@SpringBootTest
@Transactional
public class IssueRepositoryTest {

    @Autowired
    private IssueRepository issueRepository;

    @Test
    @DisplayName("issueRepository에서 전체 issue가 잘 반환되는지 확인한다.")
    void findAll() {
        List<Issue> issues = issueRepository.findAll();
        Assertions.assertThat(issues.size()).isEqualTo(2);
    }

    @Test
    @DisplayName("마일스톤에서 이슈의 개수가 올바르게 반환되는지 확인한다.")
    void test() {
        Issue issue = issueRepository.findById(1L).orElseThrow(IssueNotFoundException::new);
        int issueCount = issue.getMilestone().getTotalIssueCount();
        int openIssueCount = issue.getMilestone().getOpenIssueCount();

        Assertions.assertThat(issueCount).isEqualTo(2);
        Assertions.assertThat(openIssueCount).isEqualTo(1);
    }
}

package team02.issue_tracker;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.IssueAssignee;
import team02.issue_tracker.exception.IssueNotFoundException;
import team02.issue_tracker.repository.IssueAssigneeRepository;
import team02.issue_tracker.repository.IssueRepository;

import java.util.List;

@SpringBootTest
@Transactional
public class IssueRepositoryTest {

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private IssueAssigneeRepository issueAssigneeRepository;

    @Test
    @DisplayName("findByDeletedFalse 메소드가 잘 동작하는지 확인한다.")
    void findByDeletedFalse() {
        List<Issue> issues = issueRepository.findByDeletedFalse();

        Assertions.assertThat(issues.size()).isEqualTo(1);
    }

    @Test
    @DisplayName("이슈의 id로 IssueAssignee 리스트를 잘 반환하는지 확인한다.")
    void findIssueAssigneesByIssueId() {
        Issue issue = issueRepository.findByIdAndDeletedFalse(1L).orElseThrow(IssueNotFoundException::new);
        List<IssueAssignee> issueAssignees = issueAssigneeRepository.findByIssueId(issue.getId());

        Assertions.assertThat(issueAssignees.size()).isEqualTo(1);
    }

    @Test
    @DisplayName("findByOpenTrueAndDeletedFalse 메소드가 잘 동작하는지 확인한다.")
    void findOpenIssues() {
        List<Issue> issues = issueRepository.findByOpenTrueAndDeletedFalse();

        Assertions.assertThat(issues.size()).isEqualTo(1);
    }

    @Test
    @DisplayName("findByOpenFalseAndDeletedFalse 메소드가 잘 동작하는지 확인한다.")
    void findClosedIssues() {
        List<Issue> issues = issueRepository.findByOpenFalseAndDeletedFalse();

        Assertions.assertThat(issues.size()).isEqualTo(1);
    }
}

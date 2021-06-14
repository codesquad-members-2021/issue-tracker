package team02.issue_tracker;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team02.issue_tracker.domain.Comment;
import team02.issue_tracker.domain.CommentEmoji;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.IssueAssignee;
import team02.issue_tracker.exception.CommentNotFoundException;
import team02.issue_tracker.exception.IssueNotFoundException;
import team02.issue_tracker.repository.CommentEmojiRepository;
import team02.issue_tracker.repository.CommentRepository;
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
    @DisplayName("issueRepository에서 전체 issue가 잘 반환되는지 확인한다.")
    void findAll() {
        List<Issue> issues = issueRepository.findAll();
        Assertions.assertThat(issues.size()).isEqualTo(2);
    }

    @Test
    @DisplayName("마일스톤에서 이슈의 개수가 올바르게 반환되는지 확인한다.")
    void getIssueCount() {
        Issue issue = issueRepository.findById(1L).orElseThrow(IssueNotFoundException::new);
        int issueCount = issue.getMilestone().getTotalIssueCount();
        int openIssueCount = issue.getMilestone().getOpenIssueCount();

        Assertions.assertThat(issueCount).isEqualTo(2);
        Assertions.assertThat(openIssueCount).isEqualTo(1);
    }

    @Test
    @DisplayName("이슈의 id로 IssueAssignee 리스트를 잘 반환하는지 확인한다.")
    void findIssueAssigneesByIssueId() {
        Issue issue = issueRepository.findById(1L).orElseThrow(IssueNotFoundException::new);
        List<IssueAssignee> issueAssignees = issueAssigneeRepository.findByIssueId(issue.getId());

        Assertions.assertThat(issueAssignees.size()).isEqualTo(2);
    }
}

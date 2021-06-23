package team02.issue_tracker;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.repository.IssueSearchRepository;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static team02.issue_tracker.domain.Filter.*;

/**
 * 조건을 하나씩 테스트 한다.
 */
@SpringBootTest
@Transactional
public class IssueSearchRepositoryTest {

    @Autowired
    private IssueSearchRepository issueSearchRepository;

    @Test
    @DisplayName("open된 이슈를 찾는다.")
    void findOpenIssue() {
        List<Issue> issues =
                issueSearchRepository.findIssuesFilteredBy(null, true, null,
                        null, null, null, null);

        printIssueId(issues);
        assertThat(issues.size()).isEqualTo(2);
    }

    @Test
    @DisplayName("closed된 이슈를 찾는다.")
    void findClosedIssue() {
        List<Issue> issues =
                issueSearchRepository.findIssuesFilteredBy(null, false, null,
                        null, null, null, null);

        printIssueId(issues);
        assertThat(issues.size()).isEqualTo(1);
    }

    @Test
    @DisplayName("내가 쓴 이슈를 찾는다.")
    void findMyIssue() {
        List<Issue> issues =
                issueSearchRepository.findIssuesFilteredBy(1L, null, MY_ISSUE.getName(),
                        null, null, null, null);

        printIssueId(issues);
        assertThat(issues.size()).isEqualTo(2);
    }

    @Test
    @DisplayName("내가 단 코멘트가 포함된 이슈(my_comment)를 찾는다.")
    void findMyComment() {
        List<Issue> issues =
                issueSearchRepository.findIssuesFilteredBy(1L, null, MY_COMMENT.getName(),
                        null, null, null, null);

        printIssueId(issues);
        assertThat(issues.size()).isEqualTo(3);
    }

    @Test
    @DisplayName("내가 할당된 이슈(my_assign)를 찾는다.")
    void findMyAssign() {
        List<Issue> issues =
                issueSearchRepository.findIssuesFilteredBy(1L, null, MY_ASSIGN.getName(),
                        null, null, null, null);

        printIssueId(issues);
        assertThat(issues.size()).isEqualTo(4);
    }

    @Test
    @DisplayName("특정 유저가 작성한 이슈를 찾는다.")
    void findByWriter() {
        List<Issue> issues =
                issueSearchRepository.findIssuesFilteredBy(1L, null, null,
                        null, null, null, 2L);

        printIssueId(issues);
        assertThat(issues.size()).isEqualTo(2);
    }

    @Test
    @DisplayName("특정 유저가 할당된 이슈를 찾는다.")
    void findByAssignee() {
        List<Issue> issues =
                issueSearchRepository.findIssuesFilteredBy(1L, null, null,
                        2L, null, null, null);

        printIssueId(issues);
        assertThat(issues.size()).isEqualTo(4);
    }

    @Test
    @DisplayName("특정 마일스톤에 지정된 이슈 찾는다.")
    void findByMilestone() {
        List<Issue> issues =
                issueSearchRepository.findIssuesFilteredBy(1L, null, null,
                        null, null, 2L, null);

        printIssueId(issues);
        assertThat(issues.size()).isEqualTo(2);
    }

    @Test
    @DisplayName("특정 라벨이 달린 이슈 찾는다.")
    void findByLabel() {
        List<Issue> issues =
                issueSearchRepository.findIssuesFilteredBy(1L, null, null,
                        null, 1L, null, null);

        printIssueId(issues);
        assertThat(issues.size()).isEqualTo(2);
    }

    @Test
    @DisplayName("여러 조건이 달린 이슈를 찾는다.")
    void findFiltered() {
        List<Issue> issues =
                issueSearchRepository.findIssuesFilteredBy(1L, true, MY_COMMENT.getName(),
                        2L, 1L, 1L, 1L);

        printIssueId(issues);
        assertThat(issues.size()).isEqualTo(2);
    }

    private void printIssueId(List<Issue> issues) {
        issues.stream().map(Issue::getId).forEach(System.out::println);
    }
}

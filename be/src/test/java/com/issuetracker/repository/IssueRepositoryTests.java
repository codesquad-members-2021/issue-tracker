package com.issuetracker.repository;

import com.issuetracker.domain.Issue;
import com.issuetracker.domain.Label;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class IssueRepositoryTests {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private IssueRepository issueRepository;

    private final static Label firstLabel = new Label(1L, "테스트1", "테스트라벨1", "12345", "123411");

    private final static Label secondLabel = new Label(2L, "테스트2", "테스트라벨2", "aa12345", "aa123411");

    private final static List<Label> labels = new ArrayList<Label>(){{
        add(firstLabel);
        add(secondLabel);
    }};

    private final static Issue issue1 = new Issue(
            3L,
            "title",
            "description",
            1L,
            LocalDateTime.now(),
            true,
            false,
            1L,
            1L,
            4L,
            labels
    );

    private final static Issue issue2 = new Issue(
            4L,
            "title2",
            "description2",
            2L,
            LocalDateTime.now(),
            false,
            true,
            2L,
            2L,
            3L,
            labels
    );

    @Test
    @Transactional
    void viewAllIssuesTest() {
        SoftAssertions softAssertions = new SoftAssertions();

        // given
        issueRepository.save(issue1);
        issueRepository.save(issue2);

        // when
        List<Issue> issues = issueRepository.findAllIssues();

        // then
        // first issue check
        Issue firstIssueFromRepo = issues.get(0);
        softAssertions.assertThat(firstIssueFromRepo.getId()).isEqualTo(issue1.getId());
        softAssertions.assertThat(firstIssueFromRepo.getTitle()).isEqualTo(issue1.getTitle());
        softAssertions.assertThat(firstIssueFromRepo.getDescription()).isEqualTo(issue1.getDescription());
        softAssertions.assertThat(firstIssueFromRepo.getAssignee()).isEqualTo(issue1.getAssignee());
        softAssertions.assertThat(firstIssueFromRepo.getCreatedTime()).isEqualTo(issue1.getCreatedTime());
        softAssertions.assertThat(firstIssueFromRepo.isClosed()).isEqualTo(issue1.isClosed());
        softAssertions.assertThat(firstIssueFromRepo.isDeleted()).isEqualTo(issue1.isDeleted());
        softAssertions.assertThat(firstIssueFromRepo.getMilestoneId()).isEqualTo(issue1.getMilestoneId());
        softAssertions.assertThat(firstIssueFromRepo.getAuthorUserId()).isEqualTo(issue1.getAuthorUserId());
        softAssertions.assertThat(firstIssueFromRepo.getNumber()).isEqualTo(issue1.getNumber());

//        softAssertions.assertThat(firstIssueFromRepo.getLabels().get(0).getId()).isEqualTo(issue1.getLabels().get(0).getId());
//        softAssertions.assertThat(firstIssueFromRepo.getLabels().get(1).getId()).isEqualTo(issue1.getLabels().get(1).getId());

        // second issue check
        Issue secondIssueFromRepo = issues.get(1);
        softAssertions.assertThat(secondIssueFromRepo.getId()).isEqualTo(issue2.getId());
        softAssertions.assertThat(secondIssueFromRepo.getTitle()).isEqualTo(issue2.getTitle());
        softAssertions.assertThat(secondIssueFromRepo.getDescription()).isEqualTo(issue2.getDescription());
        softAssertions.assertThat(secondIssueFromRepo.getAssignee()).isEqualTo(issue2.getAssignee());
        softAssertions.assertThat(secondIssueFromRepo.getCreatedTime()).isEqualTo(issue2.getCreatedTime());
        softAssertions.assertThat(secondIssueFromRepo.isClosed()).isEqualTo(issue2.isClosed());
        softAssertions.assertThat(secondIssueFromRepo.isDeleted()).isEqualTo(issue2.isDeleted());
        softAssertions.assertThat(secondIssueFromRepo.getMilestoneId()).isEqualTo(issue2.getMilestoneId());
        softAssertions.assertThat(secondIssueFromRepo.getAuthorUserId()).isEqualTo(issue2.getAuthorUserId());
        softAssertions.assertThat(secondIssueFromRepo.getNumber()).isEqualTo(issue2.getNumber());
    }

}

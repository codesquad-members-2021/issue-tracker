package com.issuetracker.repository;

import com.issuetracker.domain.Issue;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class IssueRepositoryTests {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private IssueRepository issueRepository;

    public static Issue issue1 = new Issue(
            3L,
            "title",
            "description",
            1L,
            LocalDateTime.now(),
            true,
            false,
            1L,
            1L,
            4L
    );

    public static Issue issue2 = new Issue(
            4L,
            "title2",
            "description2",
            2L,
            LocalDateTime.now(),
            false,
            true,
            2L,
            2L,
            3L
    );

    @AfterEach
    void cleanUp() {
        String query = "delete from issue";
        jdbcTemplate.update(query);
    }

    @Test
    void 전체조회() {
        // given
        issueRepository.save(issue1);
        issueRepository.save(issue2);
        // when
        List<Issue> issues = issueRepository.findAllIssues();
        // then
        assertThat(issues.get(0)).isEqualTo(issue1);
        assertThat(issues.get(1)).isEqualTo(issue2);

    }

}

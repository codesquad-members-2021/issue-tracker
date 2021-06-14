package com.issuetracker.repository;

import com.issuetracker.domain.Issue;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class IssueRepository {

    private final JdbcTemplate jdbcTemplate;

    public IssueRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<Issue> findAllIssues() {
        String query = "select id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number` from issue";
        return jdbcTemplate.query(query, new IssueMapper());
    }

    public void save(Issue issue) {
        String query = "insert into issue (id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(query, issue.getId(),
                issue.getTitle(),
                issue.getDescription(),
                issue.getAssignee(),
                issue.getCreatedTime(),
                issue.isClosed(),
                issue.isDeleted(),
                issue.getMilestoneId(),
                issue.getAuthorUserId(),
                issue.getNumber());
    }
}

package com.issuetracker.repository;

import com.issuetracker.domain.Issue;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

import static com.issuetracker.util.RowMappers.ISSUE_ROW_MAPPER;
import static com.issuetracker.util.RowMappers.MILESTONE_TITLE_ROW_MAPPER;

@Repository
public class IssueRepository {

    private final JdbcTemplate jdbcTemplate;

    public IssueRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<Issue> findAllIssues() {
        String query = "select id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number` from issue";
        return jdbcTemplate.query(query, ISSUE_ROW_MAPPER);
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

//    public List<Label> findAllLabelsByIssueIdAndLabelId(Long issueId, Long labelId) {
//        String query = "select lbl.title, lbl.color_code, lbl.text_color\n" +
//                "from issue iss\n" +
//                "inner join issue_has_label\n" +
//                "on iss.id = " + issueId + "\n" +
//                "inner join label lbl\n" +
//                "on lbl.id = " + labelId;
//        return jdbcTemplate.query(query, LABEL_ROW_MAPPER);
//    }

    public String findMilestoneTitleByIssueId(Long issueId) {
        String query = "select milestone.title\n" +
                "from issue\n" +
                "inner join milestone\n" +
                "on issue.milestone_id = milestone.id\n" +
                "where issue.id = ?";
        return jdbcTemplate.queryForObject(query, MILESTONE_TITLE_ROW_MAPPER, issueId);
    }


}

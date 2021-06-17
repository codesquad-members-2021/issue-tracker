package com.issuetracker.repository;

import com.issuetracker.domain.Issue;
import com.issuetracker.domain.Label;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

import static com.issuetracker.util.RowMappers.*;

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

        // TODO: issue에 딸려있는 Label insert 로직 추
//        String queryForLabel = "insert into label (id, title, description, color_code, text_code) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
//        jdbcTemplate.update(query, issue.getId(),
//                issue.getTitle(),
//                issue.getDescription(),
//                issue.getAssignee()
    }

    public long simpleSave(Issue issue) {
        SimpleJdbcInsert simpleJdbcInsert = new SimpleJdbcInsert(jdbcTemplate)
                .withTableName("issue")
                .usingGeneratedKeyColumns("id");
        return simpleJdbcInsert.executeAndReturnKey(issue.toMap()).longValue();
    }


    public List<Label> findAllLabelsByIssueId(Long issueId) {
        System.out.println(issueId);
        String query = "select lbl.id, lbl.title, lbl.description, lbl.color_code, lbl.text_color\n" +
                "from issue iss\n" +
                "inner join issue_has_label\n" +
                "on iss.id = issue_has_label.issue_id\n" +
                "inner join label lbl\n" +
                "on lbl.id = issue_has_label.label_id\n" +
                "where iss.id = ?";
        return jdbcTemplate.query(query, LABEL_ROW_MAPPER, issueId);
    }

    public String findMilestoneTitleByIssueId(Long issueId) {
        String query = "select milestone.title\n" +
                "from issue\n" +
                "inner join milestone\n" +
                "on issue.milestone_id = milestone.id\n" +
                "where issue.id = ?";
        return jdbcTemplate.queryForObject(query, MILESTONE_TITLE_ROW_MAPPER, issueId);
    }

    public void saveForIssueHasLabels(Long issueId, Long labelId) {
        String query = "insert into issue_has_label (issue_id, label_id) values (?, ?)";
        jdbcTemplate.update(query, issueId, labelId);
    }
}

package com.issuetracker.repository;

import com.issuetracker.domain.Issue;
import com.issuetracker.domain.Label;
import com.issuetracker.dto.IssueRequestDto;
import com.issuetracker.dto.IssueSearchCondition;
import com.issuetracker.service.LabelService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

import static com.issuetracker.util.RowMappers.*;

@Repository
public class IssueRepository {

    Logger logger = LoggerFactory.getLogger(IssueRepository.class);
    private final JdbcTemplate jdbcTemplate;

    public IssueRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<Issue> findAllIssues() {
        String query = "select id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number`\n" +
                "from issue order by created_time DESC";
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

    public long simpleSave(Issue issue) {
        SimpleJdbcInsert simpleJdbcInsert = new SimpleJdbcInsert(jdbcTemplate)
                .withTableName("issue")
                .usingGeneratedKeyColumns("id");
        return simpleJdbcInsert.executeAndReturnKey(issue.toMap()).longValue();
    }


    public List<Label> findAllLabelsByIssueId(Long issueId) {
        String query = "select lbl.id, lbl.title, lbl.description, lbl.color_code, lbl.font_light\n" +
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

    public List<Issue> findIssuesByConditions(IssueSearchCondition searchCondition) {
        if (searchCondition.getClosed() != null) {
            String query = "select id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number` " +
                    "from issue " +
                    "where closed = ? " +
                    "and deleted = false " +
                    "order by created_time DESC";
            return jdbcTemplate.query(query, ISSUE_ROW_MAPPER, searchCondition.getClosed());
        }

        if (searchCondition.getAuthor() != null) {
            String query = "select id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number` " +
                    "from issue " +
                    "where author_user_id = ? " +
                    "and deleted = false " +
                    "order by created_time DESC";
            return jdbcTemplate.query(query, ISSUE_ROW_MAPPER, searchCondition.getAuthor());
        }

        if (searchCondition.getMilestone() != null) {
            String query = "select id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number` " +
                    "from issue " +
                    "where milestone_id = ? " +
                    "and deleted = false " +
                    "order by created_time DESC";
            return jdbcTemplate.query(query, ISSUE_ROW_MAPPER, searchCondition.getMilestone());
        }

        if (searchCondition.getAssignee() != null) {
            String query = "select id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number` " +
                    "from issue " +
                    "where assignee = ? " +
                    "and deleted = false " +
                    "order by created_time DESC";
            return jdbcTemplate.query(query, ISSUE_ROW_MAPPER, searchCondition.getAssignee());
        }

        logger.info("not matching anything");
        String query = "select id, title, description, assignee, created_time, closed, deleted, milestone_id, author_user_id, `number` " +
                "from issue " +
                "where deleted = false " +
                "order by created_time DESC";
        return jdbcTemplate.query(query, ISSUE_ROW_MAPPER);
    }

    public void editIssueByIssueId(Long id, IssueRequestDto request) {
        String query;

        if (request.getTitle() != null) {
            query = "update issue set title = ? where id = ?";
            jdbcTemplate.update(query, request.getTitle(), id);
        }

        if (request.getDescription() != null) {
            query = "update issue set description = ? where id = ?";
            jdbcTemplate.update(query, request.getDescription(), id);
        }

        if (request.getAssignee() != null) {
            query = "update issue set assignee = ? where id = ?";
            jdbcTemplate.update(query, request.getAssignee(), id);
        }

        if (request.getLabelIds() != null) {
            query = "delete from issue_has_label where issue_id = ?";
            jdbcTemplate.update(query, id);
            for (Long labelId : request.getLabelIds()) {
                query = "insert into issue_has_label (issue_id, label_id) values (?, ?)";
                jdbcTemplate.update(query, id, labelId);
            }
        }

        if (request.getMilestoneId() != null) {
            query = "update issue set milestone_id = ? where id = ?";
            jdbcTemplate.update(query, request.getMilestoneId(), id);
        }

        query = "update issue set closed = ? where id = ?";
        jdbcTemplate.update(query, request.isClosed(), id);

        query = "update issue set deleted = ? where id = ?";
        jdbcTemplate.update(query, request.isDeleted(), id);
    }

    public Issue findIssueByIssueId(Long id) {
        String query = "select issue.* from issue where id = ?";
        return jdbcTemplate.queryForObject(query, ISSUE_ROW_MAPPER, id);
    }

    public Integer countOpenedIssuesByMilestoneId(Long id) {
       String query = "select count(closed) from issue where milestone_id = ? AND closed = false";
        return jdbcTemplate.queryForObject(query, Integer.class, id);
    }

    public Integer countClosedIssuesByMilestoneId(Long id) {
        String query = "select count(closed) from issue where milestone_id = ? AND closed = true";
        return jdbcTemplate.queryForObject(query, Integer.class, id);
    }

    public Integer countAllOpenedIssues() {
        String query = "select count(closed) from issue where closed = false";
        return jdbcTemplate.queryForObject(query, Integer.class);
    }

    public Integer countAllClosedIssues() {
        String query = "select count(closed) from issue where closed = true";
        return jdbcTemplate.queryForObject(query, Integer.class);
    }

    public void setMilestoneNullFromIssueByMilestoneId(Long id) {
        String query = "update issue set milestone_id = null where milestone_id = ?";
        jdbcTemplate.update(query, id);
    }

    public void deleteIssueIdsConnectedByLabelId(Long id) {
        String query = "delete from issue_has_label where label_id = ?";
        jdbcTemplate.update(query, id);
    }

//    public Long findIssueIdByMilestoneId(Long milestoneId) {
//        String query = "select id from issue where milestone_id = ?";
//        System.out.println(milestoneId);
//        return jdbcTemplate.queryForObject(query, Long.class, milestoneId);
//    }
}

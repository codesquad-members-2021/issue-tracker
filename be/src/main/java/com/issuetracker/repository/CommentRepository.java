package com.issuetracker.repository;

import com.issuetracker.domain.Comment;
import com.issuetracker.domain.Issue;
import com.issuetracker.dto.CommentDto;
import com.issuetracker.dto.IssueSearchCondition;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.time.LocalDateTime;
import java.util.List;

import static com.issuetracker.util.RowMappers.COMMENT_ROW_MAPPER;
import static com.issuetracker.util.RowMappers.ISSUE_ROW_MAPPER;

@Repository
public class CommentRepository {

    private final JdbcTemplate jdbcTemplate;

    public CommentRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<Comment> findCommentsByIssueId(Long issueId){
        String query = "select id, description, created_time, user_id, issue_id " +
                "from comment " +
                "where issue_id = ? ";
        return jdbcTemplate.query(query, COMMENT_ROW_MAPPER, issueId);
    }

    public List<Comment> findCommentsByUserId(Long userId) {
        String query = "select id, description, created_time, user_id, issue_id " +
                "from comment " +
                "where user_id = ? ";
        return jdbcTemplate.query(query, COMMENT_ROW_MAPPER, userId);
    }

    public void save(String description, Long issueId, Long userId) {
        String query = "insert into comment (description, created_time, issue_id, user_id) values (?, ?, ?, ?)";
        jdbcTemplate.update(query, description, LocalDateTime.now(), issueId, userId);
    }

    public void edit(String description, Long commentId) {
        String query = "update comment set description = ? where id = ?";
        jdbcTemplate.update(query, description, commentId);

    }

    public void delete(Long commentId) {
        String query = "delete from comment where id = ?";
        jdbcTemplate.update(query, commentId);
    }

    public Integer count(Long issueId) {
        String query = "select count(*) from comment where issue_id = ?";
        return jdbcTemplate.queryForObject(query, Integer.class, issueId);
    }
}

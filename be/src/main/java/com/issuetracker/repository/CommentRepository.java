package com.issuetracker.repository;

import com.issuetracker.domain.Comment;
import com.issuetracker.domain.Issue;
import com.issuetracker.dto.IssueSearchCondition;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
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

}

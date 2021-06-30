package com.issuetracker.repository;

import com.issuetracker.domain.SelectedEmoji;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

import static com.issuetracker.util.RowMappers.EMOJI_COMMENT_ROW_MAPPER;
import static com.issuetracker.util.RowMappers.EMOJI_ISSUE_ROW_MAPPER;

@Repository
public class EmojisStatusRepository {

    private JdbcTemplate jdbcTemplate;

    public EmojisStatusRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public boolean hasRowByIssueIdAndUserId(Long issueId, Long userId) {
        String query = "select exists (select issue_id, user_id from selected_emoji where issue_id = ? and user_id = ?) as success";
        return jdbcTemplate.queryForObject(query, Boolean.class, issueId, userId);
    }
    public boolean hasRowByCommentIdAndUserId(Long commentId, Long userId) {
        String query = "select exists (select issue_id, user_id from selected_emoji where comment_id = ? and user_id = ?) as success";
        return jdbcTemplate.queryForObject(query, Boolean.class, commentId, userId);
    }

    public void create(Long issueId, Long userId) {
        String query = "insert into selected_emoji(issue_id, user_id) values(?, ?)";
        jdbcTemplate.update(query, issueId, userId);
    }


    public SelectedEmoji findEmojisStatusByIssueIdAndUserId(Long issueId, Long userId) {
        String query = "select `:thumbs_up:`, `:heart_eyes:`, issue_id, user_id from selected_emoji where issue_id = ? and user_id = ?";
        return jdbcTemplate.queryForObject(query, EMOJI_ISSUE_ROW_MAPPER, issueId, userId);
    }

    public SelectedEmoji findEmojisStatusByCommentIdAndUserId(Long commentId, Long userId) {
        String query = "select `:thumbs_up:`, `:heart_eyes:`, comment_id, user_id from selected_emoji where comment_id = ? and user_id = ?";
        return jdbcTemplate.queryForObject(query, EMOJI_COMMENT_ROW_MAPPER, commentId, userId);
    }
}

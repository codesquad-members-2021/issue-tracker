package com.issuetracker.repository;

import com.issuetracker.domain.SelectedEmoji;
import com.issuetracker.dto.EmojiRequestDto;
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

    public boolean hasRowByCodeAndIssueId(EmojiRequestDto emojiRequestDto) {
        String query = "select exists (select code, issue_id from emoji where code = ? and issue_id = ?) as success";
        return jdbcTemplate.queryForObject(query, Boolean.class, emojiRequestDto.getCode(), emojiRequestDto.getIssueId());
    }

    public void increaseCountByOneByCodeAndIssueId(EmojiRequestDto emojiRequestDto) {
        String query = "update emoji set count = count + 1 where code = ? and issue_id = ?";
        jdbcTemplate.update(query, emojiRequestDto.getCode(), emojiRequestDto.getIssueId());
    }

    public void decreaseCountByOneByCodeAndIssueId(EmojiRequestDto emojiRequestDto) {
        String query = "update emoji set count = count - 1 where code = ? and issue_id = ?";
        jdbcTemplate.update(query, emojiRequestDto.getCode(), emojiRequestDto.getIssueId());
    }

    public void insertEmojiStatusByCodeAndIssueId(EmojiRequestDto emojiRequestDto) {
        String query = "insert into emoji (code, issue_id) values (?, ?)";
        jdbcTemplate.update(query, emojiRequestDto.getCode(), emojiRequestDto.getIssueId());
    }

    public void increaseCountByOneByCodeAndCommentId(EmojiRequestDto emojiRequestDto) {
        String query = "update emoji set count = count + 1 where code = ? and comment_id = ?";
        jdbcTemplate.update(query, emojiRequestDto.getCode(), emojiRequestDto.getCommentId());
    }

    public void decreaseCountByOneByCodeAndCommentId(EmojiRequestDto emojiRequestDto) {
        String query = "update emoji set count = count - 1 where code = ? and comment_id = ?";
        jdbcTemplate.update(query, emojiRequestDto.getCode(), emojiRequestDto.getCommentId());
    }

    public void insertEmojiStatusByCodeAndCommentId(EmojiRequestDto emojiRequestDto) {
        String query = "insert into emoji (code, comment_id) values (?, ?)";
        jdbcTemplate.update(query, emojiRequestDto.getCode(), emojiRequestDto.getCommentId());
    }
}

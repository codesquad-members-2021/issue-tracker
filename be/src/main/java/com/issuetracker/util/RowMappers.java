package com.issuetracker.util;

import com.issuetracker.domain.*;
import com.issuetracker.oauth.User;
import org.springframework.jdbc.core.RowMapper;

import java.time.LocalDate;

public class RowMappers {
    public static final RowMapper<Issue> ISSUE_ROW_MAPPER = (rs, rowNum) -> {
        Issue issue = new Issue();

        issue.setId(rs.getLong("id"));
        issue.setTitle(rs.getString("title"));
        issue.setDescription(rs.getString("description"));
        issue.setAssignee(rs.getLong("assignee"));
        issue.setCreatedTime(rs.getTimestamp("created_time").toLocalDateTime());
        issue.setClosed(rs.getBoolean("closed"));
        issue.setDeleted(rs.getBoolean("deleted"));
        issue.setMilestoneId(rs.getLong("milestone_id"));
        issue.setAuthorUserId(rs.getLong("author_user_id"));
        issue.setNumber(rs.getLong("number"));

        return issue;
    };

    public static final RowMapper<Label> LABEL_ROW_MAPPER = (rs, rowNum) -> {
        Label label = new Label();

        label.setId(rs.getLong("id"));
        label.setTitle(rs.getString("title"));
        label.setDescription(rs.getString("description"));
        label.setColorCode(rs.getString("color_code"));
        label.setFontLight(rs.getBoolean("font_light"));

        return label;
    };


    public static final RowMapper<Milestone> MILESTONE_ROW_MAPPER = (rs, rowNum) -> {
        Milestone milestone = new Milestone();

        milestone.setId(rs.getLong("id"));
        milestone.setTitle(rs.getString("title"));
        milestone.setDescription(rs.getString("description"));
        milestone.setDueDate(rs.getObject("due_date", LocalDate.class));
        milestone.setClosed(rs.getBoolean("closed"));

        return milestone;
    };

    public static final RowMapper<User> USER_ROW_MAPPER = (rs, rowNum) -> {
        User user = new User();

        user.setId(rs.getLong("id"));
        user.setLogin(rs.getString("name"));
        user.setAvatar_url(rs.getString("avatar_url"));

        return user;
    };

    public static final RowMapper<String> MILESTONE_TITLE_ROW_MAPPER = (rs, rowNum) -> rs.getString("title");

    public static final RowMapper<Comment> COMMENT_ROW_MAPPER = (rs, rowNum) -> {
        Comment comment = new Comment();

        comment.setId(rs.getLong("id"));
        comment.setDescription(rs.getString("description"));
        comment.setCreatedTime(rs.getTimestamp("created_time").toLocalDateTime());
        comment.setIssueId(rs.getLong("issue_id"));
        comment.setUserId(rs.getLong("user_id"));

        return comment;
    };

    public static final RowMapper<SelectedEmoji> EMOJI_ISSUE_ROW_MAPPER = (rs, rowNum) -> {
        SelectedEmoji selectedEmoji = new SelectedEmoji();

        selectedEmoji.setThumbsUp(rs.getBoolean(":thumbs_up:"));
        selectedEmoji.setHeartEyes(rs.getBoolean(":heart_eyes:"));
        selectedEmoji.setIssueId(rs.getLong("issue_id"));
        selectedEmoji.setUserId(rs.getLong("user_id"));

        return selectedEmoji;
    };

    public static final RowMapper<SelectedEmoji> EMOJI_COMMENT_ROW_MAPPER = (rs, rowNum) -> {
        SelectedEmoji selectedEmoji = new SelectedEmoji();

        selectedEmoji.setThumbsUp(rs.getBoolean(":thumbs_up:"));
        selectedEmoji.setHeartEyes(rs.getBoolean(":heart_eyes:"));
        selectedEmoji.setCommentId(rs.getLong("comment_id"));
        selectedEmoji.setUserId(rs.getLong("user_id"));

        return selectedEmoji;
    };
}

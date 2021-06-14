package com.issuetracker.util;

import com.issuetracker.domain.Issue;
import com.issuetracker.domain.Label;
import com.issuetracker.domain.Milestone;
import org.springframework.jdbc.core.RowMapper;

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
        label.setTextColor(rs.getString("text_color"));

        return label;
    };

    public static final RowMapper<Milestone> MILESTONE_ROW_MAPPER = (rs, rowNum) -> {
        Milestone milestone = new Milestone();

        milestone.setId(rs.getLong("id"));
        milestone.setTitle(rs.getString("title"));
        milestone.setDescription(rs.getString("description"));
        milestone.setDueDate(rs.getTimestamp("due_date").toLocalDateTime().toLocalDate());
        milestone.setClosed(rs.getBoolean("closed"));

        return milestone;
    };

    public static final RowMapper<String> MILESTONE_TITLE_ROW_MAPPER = (rs, rowNum) -> rs.getString("title");
}

package com.issuetracker.repository;

import com.issuetracker.domain.Issue;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class IssueMapper implements RowMapper<Issue> {

    @Override
    public Issue mapRow(ResultSet rs, int rowNum) throws SQLException {
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
    }

}

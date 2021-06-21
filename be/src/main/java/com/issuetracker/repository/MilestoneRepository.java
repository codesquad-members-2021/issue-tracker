package com.issuetracker.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

import static com.issuetracker.util.RowMappers.MILESTONE_TITLE_ROW_MAPPER;


@Repository
public class MilestoneRepository {

    private JdbcTemplate jdbcTemplate;

    public MilestoneRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public String findMilestoneByMilestoneId(Long id) {
        String query = "select title from milestone where id = ?";
        return jdbcTemplate.queryForObject(query, MILESTONE_TITLE_ROW_MAPPER, id);
    }
}

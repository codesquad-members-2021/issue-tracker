package com.issuetracker.repository;

import com.issuetracker.domain.Milestone;
import com.issuetracker.dto.MilestoneDto;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

import java.util.List;

import static com.issuetracker.util.RowMappers.MILESTONE_ROW_MAPPER;
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

    public List<Milestone> findAll() {
        String query = "select id, title, description, due_date, closed from milestone";
        return jdbcTemplate.query(query, MILESTONE_ROW_MAPPER);
    }
}

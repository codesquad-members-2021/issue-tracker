package com.issuetracker.repository;

import com.issuetracker.domain.Milestone;
import com.issuetracker.dto.MilestoneDto;
import com.issuetracker.dto.MilestoneRequestDto;
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

    public void deleteMilestoneById(Long id) {
        String query = "delete from milestone where id = ?";
        jdbcTemplate.update(query, id);
    }

    public void editMilestoneById(Long id, MilestoneRequestDto requestDto) {
        String query = "update milestone set title = ?, description = ?, due_date = ? where id = ?";
        jdbcTemplate.update(query, requestDto.getTitle(),
                requestDto.getDescription(),
                requestDto.getDueDate(),
                id);
    }

    public void create(MilestoneRequestDto requestDto) {
       String query = "insert into milestone (title, description, due_date) values (?, ?, ?)";
       jdbcTemplate.update(query, requestDto.getTitle(),
               requestDto.getDescription(),
               requestDto.getDueDate());
    }

    public List<Milestone> findAllByClosed(boolean closed) {
        String query = "select id, title, description, due_date, closed from milestone where closed = ?";
        return jdbcTemplate.query(query, MILESTONE_ROW_MAPPER, closed);
    }

    public Integer countAllOpenedMilestone() {
        String query = "select count(closed) from milestone where closed = false";
        return jdbcTemplate.queryForObject(query, Integer.class);
    }

    public Integer countAllClosedMilestone() {
        String query = "select count(closed) from milestone where closed = true";
        return jdbcTemplate.queryForObject(query, Integer.class);
    }
}

package com.issuetracker.repository;

import com.issuetracker.domain.Label;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

import static com.issuetracker.util.RowMappers.LABEL_ROW_MAPPER;

@Repository
public class LabelRepository {

    private JdbcTemplate jdbcTemplate;

    public LabelRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<Label> findAll() {
        String query = "select id, title, description, color_code, text_color from label";
        return jdbcTemplate.query(query, LABEL_ROW_MAPPER);
    }
}

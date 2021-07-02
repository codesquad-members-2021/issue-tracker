package com.issuetracker.repository;

import com.issuetracker.domain.Label;
import com.issuetracker.dto.LabelDto;
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
        String query = "select id, title, description, color_code, font_light from label";
        return jdbcTemplate.query(query, LABEL_ROW_MAPPER);
    }

    public void create(LabelDto labelDto) {
        String query = "insert into label (title, description, color_code, font_light) values (?, ?, ?, ?)";
        jdbcTemplate.update(query, labelDto.getTitle(),
                labelDto.getDescription(),
                labelDto.getColorCode(),
                labelDto.isFontLight());
    }

    public void edit(Long id, LabelDto labelDto) {
        String query = "update label set title = ?, description = ?, color_code = ?, font_light = ? where id = ?";
        jdbcTemplate.update(query, labelDto.getTitle(),
                labelDto.getDescription(),
                labelDto.getColorCode(),
                labelDto.isFontLight(),
                id);
    }

    public void delete(Long id) {
        String query = "delete from label where id = ?";
        jdbcTemplate.update(query, id);
    }
}

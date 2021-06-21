package com.issuetracker.repository;

import com.issuetracker.domain.Label;
import com.issuetracker.oauth.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

import static com.issuetracker.util.RowMappers.*;

@Repository
public class UserRepository {

    Logger logger = LoggerFactory.getLogger(UserRepository.class);
    private final JdbcTemplate jdbcTemplate;

    public UserRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public User findOneById(Long userId) {
        logger.info("User Id :{}", userId);
        String query = "select id, name, avatar_url\n" +
                "from user\n" +
                "where id = ?";
        return jdbcTemplate.queryForObject(query, USER_ROW_MAPPER, userId);
    }

    public void save(User user) {
        String query = "insert into user (id, name, avatar_url) values (?, ?, ?)";
        jdbcTemplate.update(query, user.getId(), user.getLogin(), user.getAvatar_url());
    }
}

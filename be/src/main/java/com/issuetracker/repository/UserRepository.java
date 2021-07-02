package com.issuetracker.repository;

import com.issuetracker.oauth.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

import java.util.List;

import static com.issuetracker.util.RowMappers.USER_ROW_MAPPER;

@Repository
public class UserRepository {

    private final JdbcTemplate jdbcTemplate;

    public UserRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<User> findAll() {
       String query = "select user.* from user";
       return jdbcTemplate.query(query, USER_ROW_MAPPER);
    }

    public User findOneById(Long userId) {
        String query = "select id, name, avatar_url\n" +
                "from user\n" +
                "where id = ?";
        return jdbcTemplate.queryForObject(query, USER_ROW_MAPPER, userId);
    }

    public void save(User user) {
        String query = "insert into user (id, name, avatar_url) values (?, ?, ?)";
        jdbcTemplate.update(query, user.getId(), user.getLogin(), user.getAvatar_url());
    }

    public boolean hasSameUserId(Long userId) {
        String query = "select exists (select id from user where id = ?) as success";
        return jdbcTemplate.queryForObject(query, Boolean.class, userId);
    }

    public List<User> findAllAuthors() {
        String query = "select `user`.id, `user`.`name`, `user`.avatar_url from `user` where `user`.id IN (select distinct author_user_id from issue)";
        return jdbcTemplate.query(query, USER_ROW_MAPPER);
    }
}

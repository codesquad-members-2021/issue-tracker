package com.team11.issue.repository;

import com.team11.issue.domain.User;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    @Query("SELECT id,name,email,profile_image,access_token FROM user WHERE name=:name")
    Optional<User> findByName(@Param("name") String name);
}

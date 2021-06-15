package com.issuetracker.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUserName(String userName);

    @Modifying
    @Query(value = "select * from user where id in (select distinct assignees_id from issue_assignees)",
            nativeQuery = true)
    List<User> findAssignees();

    @Modifying
    @Query(value = "select * from user where id in (select distinct author_id from issue)",
            nativeQuery = true)
    List<User> findAuthors();
}

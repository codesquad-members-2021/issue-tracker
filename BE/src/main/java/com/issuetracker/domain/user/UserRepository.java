package com.issuetracker.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long>, CustomizedUserRepository {

    Optional<User> findByUserName(String userName);

    @Query(value = "select * from user where id in (select distinct assignees_id from issue_assignees)",
            nativeQuery = true)
    List<User> findAssignees();
}

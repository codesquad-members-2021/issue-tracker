package com.codesquad.issuetracker.domain.user;

import com.codesquad.issuetracker.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByLoginId(String loginId);

    @Override
    User save(User user);

    @Override
    List<User> findAll();

    @Query("SELECT DISTINCT new User(u.id, u.name, u.loginId) " +
            "FROM Issue i " +
            "INNER JOIN User u ON i.user.id = u.id " +
            "WHERE i.status=:isOpen")
    Set<User> findAllAuthor(@Param("isOpen") boolean isOpen);

}

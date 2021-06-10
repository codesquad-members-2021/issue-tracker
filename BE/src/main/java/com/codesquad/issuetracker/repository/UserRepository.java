package com.codesquad.issuetracker.repository;

import com.codesquad.issuetracker.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByUserId(String userId);

    @Override
    User save(User user);

    @Override
    List<User> findAll();

}

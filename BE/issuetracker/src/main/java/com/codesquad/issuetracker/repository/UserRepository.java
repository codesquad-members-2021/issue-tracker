package com.codesquad.issuetracker.repository;

import com.codesquad.issuetracker.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Optional<User> findByIdAndEmail(Long id, String email);
}

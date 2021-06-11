package com.codesquad.issuetracker.user.infra;

import com.codesquad.issuetracker.user.domain.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends CrudRepository<User, UUID> {
    @Override
    List<User> findAll();

    Optional<User> findByGitHubId(String gitHubId);
}

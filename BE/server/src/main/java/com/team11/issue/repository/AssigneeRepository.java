package com.team11.issue.repository;

import com.team11.issue.domain.Assignees;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssigneeRepository extends CrudRepository<Assignees, Long> {
}

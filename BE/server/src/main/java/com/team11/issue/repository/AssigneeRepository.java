package com.team11.issue.repository;

import com.team11.issue.domain.Assignees;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssigneeRepository extends CrudRepository<Assignees, Long> {

    void deleteAllByIssueId(Long issueId);

    List<Assignees> findAllByIssueId(Long issueId);
}

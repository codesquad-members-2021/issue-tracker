package com.codesquad.issuetracker.domain.assignee;

import com.codesquad.issuetracker.domain.assignee.Assignee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface AssigneeRepository extends CrudRepository<Assignee, Long> {
    Set<Assignee> findAssigneesByIssueId(Long issueId);

    void deleteAssigneesByIssueId(Long issueId);
}

package com.codesquad.issuetracker.issue.repository;

import com.codesquad.issuetracker.issue.domain.Issue;
import org.springframework.data.repository.CrudRepository;

public interface IssueRepository extends CrudRepository<Issue, Long> {
}

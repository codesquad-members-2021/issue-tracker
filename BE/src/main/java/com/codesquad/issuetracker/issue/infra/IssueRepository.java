package com.codesquad.issuetracker.issue.infra;

import com.codesquad.issuetracker.issue.domain.Issue;
import org.springframework.data.repository.CrudRepository;

public interface IssueRepository extends CrudRepository<Issue, Long> {
}

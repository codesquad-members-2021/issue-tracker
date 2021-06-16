package com.codesquad.issuetracker.issue.infra;

import com.codesquad.issuetracker.issue.domain.Issue;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IssueRepository extends CrudRepository<Issue, Long> {
    @Override
    List<Issue> findAll();
}

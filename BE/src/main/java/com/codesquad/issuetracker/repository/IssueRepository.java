package com.codesquad.issuetracker.repository;

import com.codesquad.issuetracker.domain.Issue;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IssueRepository extends CrudRepository<Issue, Long> {

    List<Issue> getIssuesByStatusFalse();

    List<Issue> getIssuesByStatusTrue();
}

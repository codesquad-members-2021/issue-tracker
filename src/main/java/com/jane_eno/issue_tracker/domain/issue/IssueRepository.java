package com.jane_eno.issue_tracker.domain.issue;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IssueRepository extends JpaRepository<Issue, Long> {

    List<Issue> findAllByIsOpenTrue();

    List<Issue> findAllByIsOpenFalse();
}

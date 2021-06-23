package com.team11.issue.repository;


import com.team11.issue.domain.Issue;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IssueRepository extends CrudRepository<Issue, Long> {

    List<Issue> findAllByIsDeleteFalse();

    int countByMilestoneIdAndIsOpen(Long milestoneId, boolean isOpen);
}

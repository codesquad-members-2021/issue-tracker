package com.codesquad.issuetracker.repository;

import com.codesquad.issuetracker.domain.Milestone;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MilestoneRepository extends CrudRepository<Milestone, Long> {
}

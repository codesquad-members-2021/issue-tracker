package com.codesquad.issuetracker.domain.milestone;

import com.codesquad.issuetracker.domain.milestone.Milestone;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MilestoneRepository extends JpaRepository<Milestone, Long> {
}

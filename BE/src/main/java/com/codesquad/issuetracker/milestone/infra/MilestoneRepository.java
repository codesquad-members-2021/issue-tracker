package com.codesquad.issuetracker.milestone.infra;

import com.codesquad.issuetracker.milestone.domain.Milestone;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface MilestoneRepository extends CrudRepository<Milestone, UUID> {
    @Override
    List<Milestone> findAll();
}

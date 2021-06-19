package com.team11.issue.repository;

import com.team11.issue.domain.Milestone;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MilestoneRepository extends CrudRepository<Milestone, Long> {

    @Override
    List<Milestone> findAll();
}

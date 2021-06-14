package com.codesqaude.cocomarco.domain.milestone;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MilestoneRepository extends JpaRepository<Milestone, Long> {

    @Query("select distinct m from Milestone m left join fetch m.issues")
    List<Milestone> findAllMilestone(Pageable pageable);
    
}

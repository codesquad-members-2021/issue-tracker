package com.issuetracker.domain.milestone;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface MilestoneRepository extends JpaRepository<Milestone, Long> {

    Optional<Milestone> findByTitle(String title);

    List<Milestone> findAllByIsOpen(boolean isOpen);

    long countByIsOpen(boolean isOpen);

    @Modifying
    @Query("update Milestone m set m.isOpen = :isOpen where m.id in (:idList)")
    void updateStatusBy(boolean isOpen, List<Long> idList);
}

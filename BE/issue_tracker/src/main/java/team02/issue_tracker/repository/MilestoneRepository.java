package team02.issue_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.Milestone;

import java.util.List;
import java.util.Optional;

@Repository
public interface MilestoneRepository extends JpaRepository<Milestone, Long> {

    Optional<Milestone> findByIdAndIsDeletedFalse(Long id);

    List<Milestone> findByIsDeletedFalse();

    Long countByIsOpenTrueAndIsDeletedFalse();

    Long countByIsOpenFalseAndIsDeletedFalse();
}

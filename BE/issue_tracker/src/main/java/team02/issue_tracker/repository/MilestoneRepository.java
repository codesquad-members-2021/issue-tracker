package team02.issue_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.Milestone;

import java.util.List;
import java.util.Optional;

@Repository
public interface MilestoneRepository extends JpaRepository<Milestone, Long> {

    @Override
    Optional<Milestone> findById(Long id);

    @Override
    List<Milestone> findAll();

    Long countByIsOpenTrue();

    Long countByIsOpenFalse();
}

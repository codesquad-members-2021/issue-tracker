package team02.issue_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.Milestone;

import java.util.List;
import java.util.Optional;

@Repository
public interface MilestoneRepository extends JpaRepository<Milestone, Long> {

    @Query("select m from Milestone m where m.id = ?1 and m.isDeleted = false")
    Optional<Milestone> findById(Long id);

    @Query("select m from Milestone m where m.isDeleted = false")
    List<Milestone> findAll();

    @Query("select m from Milestone m where m.isDeleted = false and m.isOpen = true")
    List<Milestone> findOpenMilestones();

    @Query("select m  from Milestone m where m.isDeleted = false and m.isOpen = false")
    List<Milestone> findClosedMilestones();
}

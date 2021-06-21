package team02.issue_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.Issue;

import java.util.List;
import java.util.Optional;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Long> {

    @Override
    List<Issue> findAll();

    @Override
    Optional<Issue> findById(Long id);

    Long countByIsOpenTrue();

    Long countByIsOpenFalse();

    Long countByMilestoneIdAndIsOpenTrue(Long milestoneId);

    Long countByMilestoneIdAndIsOpenFalse(Long milestoneId);

    Long countByMilestoneId(Long milestoneId);

    List<Issue> findByMilestoneId(Long milestoneId);
}

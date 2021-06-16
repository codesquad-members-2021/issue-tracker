package team02.issue_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.Issue;

import java.util.List;
import java.util.Optional;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Long> {

    List<Issue> findByDeletedFalse();

    Optional<Issue> findByIdAndDeletedFalse(Long id);

    List<Issue> findByOpenTrueAndDeletedFalse();

    List<Issue> findByOpenFalseAndDeletedFalse();

}

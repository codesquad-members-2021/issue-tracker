package team02.issue_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.Issue;

import java.util.List;
import java.util.Optional;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Long> {

    @Query("select i from Issue i where i.isDeleted = false")
    List<Issue> findAll();

    @Query("select i from Issue i where i.id = ?1 and i.isDeleted=false")
    Optional<Issue> findById(Long id);
}

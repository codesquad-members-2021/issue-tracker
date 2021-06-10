package team02.issue_tracker.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.Issue;

import java.util.List;

@Repository
public interface IssueRepository extends CrudRepository<Issue, Long> {

    @Override
    List<Issue> findAll();
}

package team02.issue_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.IssueLabel;
import team02.issue_tracker.domain.composite_key.IssueLabelId;

import java.util.List;

@Repository
public interface IssueLabelRepository extends JpaRepository<IssueLabel, IssueLabelId> {

    List<IssueLabel> findByIssueId(Long id);

    List<IssueLabel> findByLabelId(Long id);
}

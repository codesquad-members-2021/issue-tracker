package team02.issue_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.IssueAssignee;
import team02.issue_tracker.domain.composite_key.IssueAssigneeId;

@Repository
public interface IssueAssigneeRepository extends JpaRepository<IssueAssignee, IssueAssigneeId> {

}

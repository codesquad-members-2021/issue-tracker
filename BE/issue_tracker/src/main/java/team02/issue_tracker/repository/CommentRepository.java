package team02.issue_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.Comment;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    @Override
    Optional<Comment> findById(Long id);

    List<Comment> findByIssueId(Long issueId);
}

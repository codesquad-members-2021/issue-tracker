package team02.issue_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
}

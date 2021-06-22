package team02.issue_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.CommentEmoji;
import team02.issue_tracker.domain.composite_key.CommentEmojiId;

import java.util.List;

@Repository
public interface CommentEmojiRepository extends JpaRepository<CommentEmoji, CommentEmojiId> {

    List<CommentEmoji> findByCommentId(Long id);
}

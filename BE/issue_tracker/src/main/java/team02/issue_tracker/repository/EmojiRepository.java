package team02.issue_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.Emoji;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmojiRepository extends JpaRepository<Emoji, Long> {

    Optional<Emoji> findByIdAndDeletedFalse(Long id);

    List<Emoji> findByDeletedFalse();
}

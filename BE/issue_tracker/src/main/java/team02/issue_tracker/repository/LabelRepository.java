package team02.issue_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.Label;

import java.util.List;
import java.util.Optional;

@Repository
public interface LabelRepository extends JpaRepository<Label, Long> {

    Optional<Label> findByIdAndDeletedFalse(Long id);

    List<Label> findByDeletedFalse();

    Long countByDeletedFalse();
}

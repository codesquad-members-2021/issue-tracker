package team02.issue_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import team02.issue_tracker.domain.Label;

import java.util.List;
import java.util.Optional;

@Repository
public interface LabelRepository extends JpaRepository<Label, Long> {

    @Query("select l from Label l where l.isDeleted = false and l.id = ?1")
    Optional<Label> findById(Long id);

    @Query("select l from Label l where l.isDeleted = false")
    List<Label> findAll();
}

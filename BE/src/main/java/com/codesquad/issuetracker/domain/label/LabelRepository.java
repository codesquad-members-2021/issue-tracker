package com.codesquad.issuetracker.domain.label;

import com.codesquad.issuetracker.domain.label.Label;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface LabelRepository extends JpaRepository<Label, Long> {
    @Query("SELECT new Label(l.id, l.title, l.content, l.color) FROM Label l " +
            "LEFT JOIN IssueLabel il ON il.label.id = l.id WHERE il.issue.id = :issueId")
    Set<Label> findByIssueId(@Param("issueId") Long issueId);

}

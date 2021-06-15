package com.codesquad.issuetracker.repository;

import com.codesquad.issuetracker.domain.Label;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface LabelRepository extends CrudRepository<Label, Long> {
    @Query("SELECT l.id, l.title, l.content, l.color FROM Label l " +
            "LEFT JOIN IssueLabel il ON il.label.id = :issueId where il.issue.id = :issueId")
    Set<Label> findByIssueId(@Param("issueId") Long issueId);
}

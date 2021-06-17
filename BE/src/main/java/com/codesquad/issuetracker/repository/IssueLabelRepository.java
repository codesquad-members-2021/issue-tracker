package com.codesquad.issuetracker.repository;

import com.codesquad.issuetracker.domain.IssueLabel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IssueLabelRepository extends CrudRepository<IssueLabel, Long> {
    @Query("SELECT new IssueLabel(il.id, il.issue, il.label) FROM IssueLabel il WHERE il.issue.id = :issueId")
    List<IssueLabel> findIssueLabelsByIssueId(@Param("issueId") Long issueId);
}

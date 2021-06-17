package com.codesquad.issuetracker.repository;

import com.codesquad.issuetracker.domain.IssueLabel;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IssueLabelRepository extends CrudRepository<IssueLabel, Long> {
    @Query("SELECT il.label.id FROM IssueLabel il WHERE il.issue.id = :issueId")
    List<Long> findIssueLabelsLabelIdByIssueId(@Param("issueId") Long issueId);

    @Transactional
    @Modifying
    @Query("DELETE FROM IssueLabel il WHERE il.issue.id = :issueId AND il.label.id = :labelId")
    void deleteIssueLabelByIssueIdAndLabelId(@Param("issueId") Long issueId, @Param("labelId") Long labelId);
}

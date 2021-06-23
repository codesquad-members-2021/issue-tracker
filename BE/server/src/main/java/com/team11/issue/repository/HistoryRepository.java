package com.team11.issue.repository;

import com.team11.issue.domain.History;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoryRepository extends CrudRepository<History, Long> {
    History findFirstByIssueIdOrderByHistoryDateTimeDesc(Long issueId);

}

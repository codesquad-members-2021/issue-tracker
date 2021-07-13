package com.issuetracker.domain.issue;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IssueRepository extends JpaRepository<Issue, Long>, CustomizedIssueRepository {

    @Modifying
    @Query("update Issue i set i.isOpen = :isOpen where i.id in (:idList)")
    void updateStatusBy(boolean isOpen, List<Long> idList);
}

package com.codesqaude.cocomarco.domain.issue;

import com.codesqaude.cocomarco.domain.issue.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepository extends JpaRepository<Issue,Long> {
}

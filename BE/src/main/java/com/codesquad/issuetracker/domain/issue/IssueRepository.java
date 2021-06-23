package com.codesquad.issuetracker.domain.issue;

import com.codesquad.issuetracker.domain.issue.Issue;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IssueRepository extends CrudRepository<Issue, Long> {

    List<Issue> getIssuesByStatusFalse();

    List<Issue> getIssuesByStatusTrue();

    @Query("SELECT new Issue(i.id, i.title, i.content, i.status, i.createdAt, i.milestoneId, i.user) FROM Issue i " +
            "LEFT JOIN Assignee a ON a.issueId = i.id WHERE a.userId = :userId")
    List<Issue> getIssuesByAssigneeUserId(@Param("userId") Long userId);

    @Query("SELECT new Issue(i.id, i.title, i.content, i.status, i.createdAt, i.milestoneId, i.user) FROM Issue i " +
            "LEFT JOIN Comment c ON c.issueId = i.id WHERE c.user.id = :userId")
    List<Issue> getIssuesByCommentUserId(@Param("userId") Long userId);

}

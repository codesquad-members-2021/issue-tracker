package com.codesqaude.cocomarco.domain.comment;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    //    @Query("select c from Comment c left join fetch c.writer where c.issue.id = :issueId")
    @EntityGraph(attributePaths = {"writer"})
    List<Comment> findAllByIssueId(Long issueId, Pageable pageable);
}

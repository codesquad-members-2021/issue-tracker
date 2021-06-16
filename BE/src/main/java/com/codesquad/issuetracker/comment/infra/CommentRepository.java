package com.codesquad.issuetracker.comment.infra;

import com.codesquad.issuetracker.comment.domain.Comment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface CommentRepository extends CrudRepository<Comment, UUID> {
    List<Comment> findAllByIssueId(Long id);
}

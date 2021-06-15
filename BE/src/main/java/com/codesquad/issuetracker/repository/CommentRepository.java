package com.codesquad.issuetracker.repository;

import com.codesquad.issuetracker.domain.Comment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CommentRepository extends CrudRepository<Comment, Long> {

    List<Comment> getCommentsByIssueId(Long issueId);
}

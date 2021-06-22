package com.codesquad.issuetracker.domain.comment;

import com.codesquad.issuetracker.domain.comment.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> getCommentsByIssueId(Long issueId);
}

package com.codesqaude.cocomarco.service;

import com.codesqaude.cocomarco.common.exception.NotFoundCommentException;
import com.codesqaude.cocomarco.common.exception.NotFoundIssueException;
import com.codesqaude.cocomarco.common.exception.NotFoundUserException;
import com.codesqaude.cocomarco.domain.comment.Comment;
import com.codesqaude.cocomarco.domain.comment.CommentRepository;
import com.codesqaude.cocomarco.domain.comment.dto.CommentRequest;
import com.codesqaude.cocomarco.domain.issue.IssueRepository;
import com.codesqaude.cocomarco.domain.issue.model.Issue;
import com.codesqaude.cocomarco.domain.user.User;
import com.codesqaude.cocomarco.domain.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@AllArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final IssueRepository issueRepository;
    private final UserRepository userRepository;

    public void write(Long issueId, String writerId, CommentRequest commentRequest) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(NotFoundIssueException::new);
        User writer = userRepository.findById(UUID.fromString(writerId)).orElseThrow(NotFoundUserException::new);
        Comment comment = new Comment(issue, writer, commentRequest.getText());
        commentRepository.save(comment);
    }

    public void modify(String writerId, CommentRequest commentRequest, Long commentId) {
        Comment comment = findById(commentId);
        comment.isSameWriter(UUID.fromString(writerId));
        comment.modify(commentRequest.getText());
    }

    public void delete(String writerId, Long commentId) {
        Comment comment = findById(commentId);
        comment.isSameWriter(UUID.fromString(writerId));
        commentRepository.delete(comment);
    }

    public Comment findById(Long id) {
        return commentRepository.findById(id).orElseThrow(NotFoundCommentException::new);
    }
}

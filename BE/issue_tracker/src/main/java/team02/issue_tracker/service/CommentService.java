package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.Comment;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.dto.issue.IssueRequest;
import team02.issue_tracker.repository.CommentRepository;

@Service
public class CommentService {

    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment makeComment(IssueRequest issueRequest, User writer, Issue issue) {
        Comment comment = issueRequest.toComment(writer);
        comment.addIssue(issue);
        return commentRepository.save(comment);
    }

    public Comment save(Comment comment) {
        return commentRepository.save(comment);
    }
}

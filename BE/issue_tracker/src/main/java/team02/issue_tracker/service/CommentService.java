package team02.issue_tracker.service;

import org.springframework.stereotype.Service;
import team02.issue_tracker.domain.Comment;
import team02.issue_tracker.domain.CommentEmoji;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.User;
import team02.issue_tracker.dto.issue.IssueRequest;
import team02.issue_tracker.repository.CommentEmojiRepository;
import team02.issue_tracker.repository.CommentRepository;

import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final CommentEmojiRepository commentEmojiRepository;

    public CommentService(CommentRepository commentRepository, CommentEmojiRepository commentEmojiRepository) {
        this.commentRepository = commentRepository;
        this.commentEmojiRepository = commentEmojiRepository;
    }

    public Comment makeComment(IssueRequest issueRequest, User writer, Issue issue) {
        Comment comment = issueRequest.toComment(writer);
        comment.addIssue(issue);
        return commentRepository.save(comment);
    }

    public Comment save(Comment comment) {
        return commentRepository.save(comment);
    }

    public void saveAll(List<Comment> comments) {
        commentRepository.saveAll(comments);
    }

    public void deleteCommentEmojis(Long commentId) {
        List<CommentEmoji> commentEmojis = commentEmojiRepository.findByCommentId(commentId);
        commentEmojiRepository.deleteAll(commentEmojis);
    }
}

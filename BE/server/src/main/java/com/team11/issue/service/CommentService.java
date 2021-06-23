package com.team11.issue.service;

import com.team11.issue.domain.Comment;
import com.team11.issue.domain.Issue;
import com.team11.issue.domain.User;
import com.team11.issue.dto.comment.CommentRequestDTO;
import com.team11.issue.exception.*;
import com.team11.issue.repository.CommentRepository;
import com.team11.issue.repository.IssueRepository;
import com.team11.issue.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final IssueRepository issueRepository;

    private User findUser(String userName) {
        return userRepository.findByName(userName).orElseThrow(UserNotFoundException::new);
    }

    private Issue findIssue(Long issueId) {
        return issueRepository.findById(issueId).orElseThrow(IssueNotFoundException::new);
    }

    private Comment findComment(Long commentId) {
        return commentRepository.findById(commentId).orElseThrow(CommentNotFoundException::new);
    }

    private boolean verifyUser(String userName, Comment comment) {
        if (findUser(userName).equals(comment.getUser())) {
            return true;
        }
        return false;
    }

    private void confirmCommenter(String userName, Comment comment, String errorMessage) {
        if (!verifyUser(userName, comment)) {
            throw new UserIllegalException(errorMessage);
        }
    }

    public void createComment(Long issueId, String userName, CommentRequestDTO commentRequestDTO) {
        commentRepository.save(Comment.createComment(findUser(userName), findIssue(issueId), commentRequestDTO));
    }

    public void updateComment(Long issueId, Long commentId, String userName, CommentRequestDTO commentRequestDTO) {
        Comment comment = findComment(commentId);

        confirmCommenter(userName, comment, "코멘트 작성자만 글을 수정할 수 있습니다.");

        comment.updateComment(commentRequestDTO.getContents());
        commentRepository.save(comment);
    }

    public void deleteComment(Long issueId, Long commentId, String userName) {
        Comment comment = findComment(commentId);

        confirmCommenter(userName, comment, "코멘트 작성자만 글을 삭제할 수 있습니다.");

        commentRepository.delete(comment);
    }
}

package com.team11.issue.service;

import com.team11.issue.domain.Comment;
import com.team11.issue.domain.Issue;
import com.team11.issue.domain.User;
import com.team11.issue.dto.comment.CommentRequestDTO;
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
        return userRepository.findByName(userName).orElseThrow(RuntimeException::new);
    }

    private Issue findIssue(Long issueId) {
        return issueRepository.findById(issueId).orElseThrow(RuntimeException::new);
    }

    private Comment findComment(Long commentId) {
        return commentRepository.findById(commentId).orElseThrow(RuntimeException::new);
    }

    private boolean verifyUser(String userName, Comment comment) {
        if(findUser(userName).equals(comment.getUser())) {
            return true;
        }
        return false;
    }

    public void createComment(Long issueId, String userName, CommentRequestDTO commentRequestDTO) {
        commentRepository.save(Comment.createComment(findUser(userName), findIssue(issueId), commentRequestDTO));
    }

    public void updateComment(Long issueId, Long commentId, String userName, CommentRequestDTO commentRequestDTO) {
        Comment comment = findComment(commentId);
        verifyUser(userName, comment);
        comment.updateComment(commentRequestDTO.getContents());
        commentRepository.save(comment);
    }
}

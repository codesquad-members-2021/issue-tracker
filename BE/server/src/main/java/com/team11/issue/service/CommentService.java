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

    public void createComment(Long issueId, String userName, CommentRequestDTO commentRequestDTO) {

        User user = userRepository.findByName(userName).orElseThrow(RuntimeException::new);

        Issue issue = issueRepository.findById(issueId).orElseThrow(RuntimeException::new);

        commentRepository.save(Comment.createComment(user, issue, commentRequestDTO));
    }
}

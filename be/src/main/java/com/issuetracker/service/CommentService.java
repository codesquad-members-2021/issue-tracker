package com.issuetracker.service;

import com.issuetracker.domain.Comment;
import com.issuetracker.dto.CommentDto;
import com.issuetracker.oauth.UserDto;
import com.issuetracker.repository.CommentRepository;
import com.issuetracker.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;

    public CommentService(CommentRepository commentRepository, UserRepository userRepository){
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
    }

    public List<CommentDto> findCommentsByIssueId(Long issueId){
        return commentRepository.findCommentsByIssueId(issueId).stream()
                .map(comment -> new CommentDto(comment, findUserByComment(comment)))
                .collect(Collectors.toList());
    }

    private UserDto findUserByComment(Comment comment){
        return new UserDto(userRepository.findOneById(comment.getUserId()));
    }

}

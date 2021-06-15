package com.codesquad.issuetracker.issue.dto;

import com.codesquad.issuetracker.comment.domain.Comment;
import com.codesquad.issuetracker.comment.dto.CommentResponse;
import com.codesquad.issuetracker.issue.domain.Issue;
import com.codesquad.issuetracker.label.domain.Label;
import com.codesquad.issuetracker.label.dto.LabelDto;
import com.codesquad.issuetracker.milestone.domain.Milestone;
import com.codesquad.issuetracker.milestone.dto.MilestoneResponseDto;
import com.codesquad.issuetracker.user.domain.User;
import com.codesquad.issuetracker.user.dto.UserDto;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class IssueResponse {

    private final Long id;
    private final UserDto author;
    private final boolean isOpen;
    private final String title;
    private final LocalDateTime createdAt;
    private final Set<LabelDto> labels;
    private final Set<UserDto> assignees;
    private final MilestoneResponseDto milestone;
    private final List<CommentResponse> comments;

    public static IssueResponse fromEntity(Issue issue, List<Comment> comments) {
        return new IssueResponse(
                issue.getId(),
                UserDto.fromEntity(issue.getAuthor()),
                issue.isOpen(),
                issue.getTitle(),
                issue.getCreatedAt(),
                issue.getLabels().stream().map(LabelDto::fromEntity).collect(Collectors.toSet()),
                issue.getAssignees().stream().map(UserDto::fromEntity).collect(Collectors.toSet()),
                MilestoneResponseDto.fromEntity(issue.getMilestone()),
                comments.stream().map(CommentResponse::fromEntity).collect(Collectors.toList()));
    }
}

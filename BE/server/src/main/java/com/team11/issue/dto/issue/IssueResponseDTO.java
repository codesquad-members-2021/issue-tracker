package com.team11.issue.dto.issue;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.team11.issue.domain.Comment;
import com.team11.issue.domain.History;
import com.team11.issue.domain.Issue;
import com.team11.issue.domain.Milestone;
import com.team11.issue.dto.comment.CommentResponseDTO;
import com.team11.issue.dto.comment.CommentsResponseDTO;
import com.team11.issue.dto.history.HistoryResponseDTO;
import com.team11.issue.dto.label.LabelResponseDTO;
import com.team11.issue.dto.label.LabelsResponseDTO;
import com.team11.issue.dto.milestone.IssueCountResponseDTO;
import com.team11.issue.dto.milestone.MilestoneResponseDTO;
import com.team11.issue.dto.user.UserResponseDTO;
import com.team11.issue.dto.user.UsersResponseDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@JsonPropertyOrder({"issueId", "history", "isOpen", "title", "contents", "author", "assignee", "milestone", "labels", "comments"})
@RequiredArgsConstructor
@Builder
@Getter
public class IssueResponseDTO {

    private final Long issueId;
    private final HistoryResponseDTO history;
    private final boolean isOpen;
    private final String title;
    private final String contents;
    private final UserResponseDTO author;
    private final UsersResponseDTO assignee;
    private final MilestoneResponseDTO milestone;
    private final LabelsResponseDTO labels;
    private final CommentsResponseDTO comments;

    public static IssueResponseDTO from(Issue issue, History history, UsersResponseDTO usersResponseDTO, IssueCountResponseDTO issueCountResponseDTO, LabelsResponseDTO labelsResponseDTO, CommentsResponseDTO commentsResponseDTO) {
        return IssueResponseDTO.builder()
                .issueId(issue.getId())
                .history(HistoryResponseDTO.from(history))
                .isOpen(issue.isOpen())
                .title(issue.getTitle())
                .contents(issue.getContents())
                .author(UserResponseDTO.from(issue.getUser()))
                .assignee(usersResponseDTO)
                .milestone(MilestoneResponseDTO.from(issue.getMilestone(), issueCountResponseDTO))
                .labels(labelsResponseDTO)
                .comments(commentsResponseDTO)
                .build();

    }
}

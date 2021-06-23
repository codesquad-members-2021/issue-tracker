package com.team11.issue.dto.issue;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.team11.issue.domain.*;
import com.team11.issue.dto.comment.CommentResponseDTO;
import com.team11.issue.dto.history.HistoryResponseDTO;
import com.team11.issue.dto.label.LabelResponseDTO;
import com.team11.issue.dto.milestone.MilestoneResponseDTO;
import com.team11.issue.dto.user.UserResponseDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@JsonPropertyOrder({"issueId", "history", "isOpen", "title", "contents", "author", "assignees", "milestone", "labels", "comments"})
@RequiredArgsConstructor
@Builder
@Getter
public class IssueDetailResponseDTO {

    private final Long issueId;
    private final HistoryResponseDTO history;
    private final boolean isOpen;
    private final String title;
    private final String contents;
    private final UserResponseDTO author;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private final List<UserResponseDTO> assignees;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private final MilestoneResponseDTO milestone;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private final List<LabelResponseDTO> labels;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private final List<CommentResponseDTO> comments;


    public boolean getIsOpen() {
        return isOpen;
    }

    private static List<LabelResponseDTO> convertLabels(List<IssueHasLabel> issueHasLabels) {
        return issueHasLabels.stream()
                .map(issueHasLabel -> LabelResponseDTO.from(issueHasLabel.getLabel()))
                .collect(Collectors.toList());
    }

    private static List<UserResponseDTO> convertUsers(List<Assignees> assignees) {
        return assignees.stream()
                .map(assignee -> UserResponseDTO.from(assignee.getUser()))
                .collect(Collectors.toList());
    }

    private static List<CommentResponseDTO> convertComments(List<Comment> comments) {
        return comments.stream()
                .map(comment -> CommentResponseDTO.from(comment))
                .collect(Collectors.toList());
    }

    public static IssueDetailResponseDTO from(Issue issue, History history, User user, List<Assignees> assignees, MilestoneResponseDTO milestoneResponseDTO, List<IssueHasLabel> issueHasLabels, List<Comment> comments) {
        return IssueDetailResponseDTO.builder()
                .issueId(issue.getId())
                .history(HistoryResponseDTO.from(history))
                .isOpen(issue.isOpen())
                .title(issue.getTitle())
                .contents(issue.getContents())
                .author(UserResponseDTO.from(user))
                .assignees(convertUsers(assignees))
                .milestone(milestoneResponseDTO)
                .labels(convertLabels(issueHasLabels))
                .comments(convertComments(comments))
                .build();

    }
}

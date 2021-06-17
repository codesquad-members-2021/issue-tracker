package com.codesqaude.cocomarco.domain.issue.model.dto;

import com.codesqaude.cocomarco.domain.comment.dto.CommentResponse;
import com.codesqaude.cocomarco.domain.issue.model.Assignment;
import com.codesqaude.cocomarco.domain.issue.model.Issue;
import com.codesqaude.cocomarco.domain.issue.model.IssueLabel;
import com.codesqaude.cocomarco.domain.issue.model.IssueStatus;
import com.codesqaude.cocomarco.domain.label.Label;
import com.codesqaude.cocomarco.domain.label.dto.LabelResponse;
import com.codesqaude.cocomarco.domain.milestone.dto.MilestoneSoloResponse;
import com.codesqaude.cocomarco.domain.user.User;
import com.codesqaude.cocomarco.domain.user.dto.UserResponse;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
public class IssueDetailResponse {

    private Long id;
    private String title;
    private String writer;
    private LocalDateTime writeTime;
    private MilestoneSoloResponse milestone;
    private List<UserResponse> assignments;
    private List<LabelResponse> labels;
    private String text;
    private IssueStatus status;
    private String writerAvatarImage;
    private List<CommentResponse> comments;

    public static IssueDetailResponse of(Issue issue) {
        List<Label> labels = issue.getIssueLabels().stream().map(IssueLabel::getLabel).collect(Collectors.toList());
        List<User> assignments = issue.getAssignments().stream().map(Assignment::getUser).collect(Collectors.toList());

        List<UserResponse> assignmentResponses = assignments.stream().map(UserResponse::of).collect(Collectors.toList());
        List<LabelResponse> labelResponses = labels.stream().map(LabelResponse::of).collect(Collectors.toList());
        List<CommentResponse> commentResponses = issue.getComments().stream().map(CommentResponse::of).collect(Collectors.toList());
        return new IssueDetailResponseBuilder()
                .id(issue.getId())
                .title(issue.getTitle())
                .writer(issue.getWriter().getName())
                .writeTime(issue.getWritingTime())
                .milestone(MilestoneSoloResponse.of(issue.getMilestone()))
                .assignments(assignmentResponses)
                .labels(labelResponses)
                .text(issue.getText())
                .status(issue.getStatus())
                .writerAvatarImage(issue.getWriter().getAvatarImage())
                .comments(commentResponses)
                .build();
    }
}

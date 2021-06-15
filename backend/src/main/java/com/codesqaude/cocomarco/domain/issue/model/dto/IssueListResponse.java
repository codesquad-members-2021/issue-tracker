package com.codesqaude.cocomarco.domain.issue.model.dto;

import com.codesqaude.cocomarco.domain.issue.model.Assignment;
import com.codesqaude.cocomarco.domain.issue.model.Issue;
import com.codesqaude.cocomarco.domain.issue.model.IssueLabel;
import com.codesqaude.cocomarco.domain.issue.model.IssueStatus;
import com.codesqaude.cocomarco.domain.label.Label;
import com.codesqaude.cocomarco.domain.label.dto.LabelResponse;
import com.codesqaude.cocomarco.domain.milestone.dto.MilestoneSoloResponse;
import com.codesqaude.cocomarco.domain.user.User;
import com.codesqaude.cocomarco.domain.user.UserResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IssueListResponse {

    private Long id;
    private String title;
    private String writer;
    private LocalDateTime writeTime;
    private MilestoneSoloResponse milestone;
    private List<UserResponse> assignments;
    private List<LabelResponse> labels;
    private IssueStatus status;


    public static IssueListResponse of(Issue issue) {
        List<Label> labels = issue.getIssueLabels().stream().map(IssueLabel::getLabel).collect(Collectors.toList());
        List<User> assignments = issue.getAssignments().stream().map(Assignment::getUser).collect(Collectors.toList());

        List<UserResponse> assignmentResponses = assignments.stream().map(UserResponse::of).collect(Collectors.toList());
        List<LabelResponse> labelResponses = labels.stream().map(LabelResponse::of).collect(Collectors.toList());
        return new IssueListResponse.IssueListResponseBuilder()
                .id(issue.getId())
                .title(issue.getTitle())
                .writer(issue.getWriter().getName())
                .writeTime(issue.getWritingTime())
                .milestone(MilestoneSoloResponse.of(issue.getMilestone()))
                .assignments(assignmentResponses)
                .labels(labelResponses)
                .status(issue.getStatus())
                .build();
    }

}

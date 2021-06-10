package team02.issue_tracker.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import team02.issue_tracker.domain.Issue;
import team02.issue_tracker.domain.IssueAssignee;
import team02.issue_tracker.domain.IssueLabel;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import static team02.issue_tracker.dto.MilestoneResponse.toMilestoneResponse;
import static team02.issue_tracker.dto.UserResponse.toUserResponse;

@AllArgsConstructor
@Getter
public class IssueResponse {

    private Long id;
    private int issueNumber;
    private String title;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createdTime;

    private Boolean isOpen;
    private UserResponse writer;
    private List<UserResponse> assignees;
    private MilestoneResponse milestone;
    private List<LabelResponse> labels;

    public static IssueResponse toIssueResponse(Issue issue) {
        return new IssueResponse(issue.getId(), issue.getIssueNumber(), issue.getTitle(), issue.getCreatedTime(),
                issue.isOpen(), toUserResponse(issue.getWriter()), toAssigneeResponses(issue.getIssueAssignees()),
                toMilestoneResponse(issue.getMilestone()), toLabelResponses(issue.getIssueLabels()));
    }

    private static List<UserResponse> toAssigneeResponses(List<IssueAssignee> issueAssignees) {
        return issueAssignees.stream()
                .map(IssueAssignee::getAssignee)
                .map(UserResponse::toUserResponse)
                .collect(Collectors.toList());
    }

    private static List<LabelResponse> toLabelResponses(List<IssueLabel> issueLabels) {
        return issueLabels.stream()
                .map(IssueLabel::getLabel)
                .map(LabelResponse::toLabelResponse)
                .collect(Collectors.toList());
    }
}

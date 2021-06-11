package com.jane_eno.issue_tracker.web.dto.response;

import com.jane_eno.issue_tracker.domain.issue.Issue;
import com.jane_eno.issue_tracker.web.dto.response.vo.Assignee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class IssueDetailPageResponseDTO {
    private final Long id;
    private final String title;
    private final boolean status;
    private final LocalDateTime createdDateTime;
    private final List<CommentDTO> comments;
    private final List<Assignee> assignees;
    private final List<LabelDTO> labels;
    private final List<MilestoneDTO> milestones;

    public static IssueDetailPageResponseDTO of(Issue issue, List<CommentDTO> comments, List<Assignee> assignees, List<LabelDTO> labels, List<MilestoneDTO> milestones) {
        return IssueDetailPageResponseDTO.builder()
                .id(issue.getId())
                .title(issue.getTitle())
                .status(issue.isOpen())
                .createdDateTime(issue.getCreatedDateTime())
                .comments(comments)
                .assignees(assignees)
                .labels(labels)
                .milestones(milestones)
                .build();
    }
}

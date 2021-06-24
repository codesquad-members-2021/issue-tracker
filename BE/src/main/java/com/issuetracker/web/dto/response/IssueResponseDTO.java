package com.issuetracker.web.dto.response;

import com.issuetracker.domain.elasticsearch.IssueDocument;
import com.issuetracker.web.dto.vo.Assignee;
import com.issuetracker.domain.issue.Issue;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class IssueResponseDTO {

    private final Long id;
    private final String title;
    private final String comment;
    private final String authorAvatarUrl;
    private final LocalDateTime createdDateTime;
    private final Integer commentNumber;
    private final List<Assignee> assignees;
    private final List<LabelDTO> labels;
    private final String milestone;

    public static IssueResponseDTO of(Issue issue, List<Assignee> assignees, List<LabelDTO> labels) {
        return IssueResponseDTO.builder()
                .id(issue.getId())
                .title(issue.getTitle())
                .comment(issue.getFirstComment())
                .authorAvatarUrl(issue.getAuthor().getAvatarUrl())
                .createdDateTime(issue.getCreatedDateTime())
                .commentNumber(issue.getCommentNumber())
                .assignees(assignees)
                .labels(labels)
                .milestone(issue.getMilestoneTitle())
                .build();
    }

    public static IssueResponseDTO of(IssueDocument issueDocument, List<Assignee> assignees, List<LabelDTO> labels) {
        return IssueResponseDTO.builder()
                .id(issueDocument.getId())
                .title(issueDocument.getTitle())
                .comment(issueDocument.getFirstComment())
                .authorAvatarUrl(issueDocument.getAuthor().getAvatarUrl())
                .createdDateTime(issueDocument.getCreatedDateTime())
                .commentNumber(issueDocument.getCommentNumber())
                .assignees(assignees)
                .labels(labels)
                .milestone(issueDocument.getMilestoneTitle())
                .build();
    }
}

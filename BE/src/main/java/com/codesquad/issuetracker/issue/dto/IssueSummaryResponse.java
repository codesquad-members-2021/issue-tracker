package com.codesquad.issuetracker.issue.dto;

import com.codesquad.issuetracker.issue.domain.Issue;
import com.codesquad.issuetracker.label.dto.LabelDto;
import com.codesquad.issuetracker.milestone.dto.MilestoneResponseDto;
import com.codesquad.issuetracker.user.dto.UserDto;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class IssueSummaryResponse {

    private final Long id;
    private final UserDto author;
    private final boolean open;
    private final String title;
    private final LocalDateTime createdAt;
    private final Set<LabelDto> labels;
    private final Set<UserDto> assignees;
    private final MilestoneResponseDto milestone;

    public static IssueSummaryResponse fromEntity(Issue issue) {
        MilestoneResponseDto milestone = null;
        if (issue.getMilestone() != null) {
            milestone = MilestoneResponseDto.fromEntity(issue.getMilestone());
        }
        return new IssueSummaryResponse(
                issue.getId(),
                UserDto.fromEntity(issue.getAuthor()),
                issue.isOpen(),
                issue.getTitle(),
                issue.getCreatedAt(),
                issue.getLabels().stream().map(LabelDto::fromEntity).collect(Collectors.toSet()),
                issue.getAssignees().stream().map(UserDto::fromEntity).collect(Collectors.toSet()),
                milestone
        );
    }
}

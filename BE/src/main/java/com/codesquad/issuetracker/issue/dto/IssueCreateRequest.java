package com.codesquad.issuetracker.issue.dto;

import com.codesquad.issuetracker.issue.domain.Issue;
import com.codesquad.issuetracker.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Getter
@AllArgsConstructor
public class IssueCreateRequest {

    private final String title;
    private final String comment;
    private final List<UUID> assigneeIds;
    private final List<UUID> labelIds;
    private final UUID milestoneId;

    public Issue createIssue(User author) {
        return Issue.create(author, title);
    }

    public boolean hasMilestoneId() {
        return milestoneId != null;
    }

}

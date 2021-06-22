package com.codesquad.issuetracker.issue.dto;

import com.codesquad.issuetracker.issue.domain.Issue;
import com.codesquad.issuetracker.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Getter
@NoArgsConstructor
public class IssueCreateRequest {

    private String title;
    private String comment;
    private List<UUID> assigneeIds;
    private List<UUID> labelIds;
    private UUID milestoneId;

    public Issue createIssue(User author) {
        return Issue.create(author, title);
    }

    public boolean hasMilestoneId() {
        return milestoneId != null;
    }

}
